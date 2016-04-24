host="musicalcomedyfest.com"
folder="musicom"

# Create folder if it doesn't exist
ssh "$host" "mkdir -p /opt/src/$folder"

# Minify assets
webpack --optimize-minimize

# Sync source code
rsync \
  --exclude '.git' \
  --exclude 'node_modules' \
  --exclude 'deploy.sh' \
  -avz \
  "./" "$host":"/opt/src/$folder"

# Npm install
ssh "$host" "cd /opt/src/$folder && NODE_ENV=production npm install"

# Set up SSH tunnels
ps aux | grep "ssh -Nf" | awk {'print $2'} | xargs kill -9 > /dev/null 2>&1
ssh -NfL 5001:127.0.0.1:27017 "$host"

# Restart process
ssh "$host" "killall node > /dev/null 2>&1"
ssh "$host" "source ~/.bashrc && cd /opt/src/$folder && NODE_ENV=production node app.js"
