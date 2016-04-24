host="musicalcomedyfest.com"
folder="musicom"

ssh "$host" "mkdir -p /opt/src/$folder"

webpack --optimize-minimize

rsync \
  --exclude '.git' \
  --exclude 'node_modules' \
  --exclude 'deploy.sh' \
  -avz \
  "./" "$host":"/opt/src/$folder"

ssh "$host" "cd /opt/src/$folder && NODE_ENV=production npm install"


# wget -qO- https://deb.nodesource.com/setup_4.x | sudo bash -
