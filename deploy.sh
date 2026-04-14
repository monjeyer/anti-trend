#!/usr/bin/env bash
#
# Deploy The Anti-Trend Report to meyer.land/anti-trend
# Rsync via the Digital Ocean droplet.

set -euo pipefail

SSH_KEY="$HOME/.ssh/meyerland_new"
HOST="root@138.197.101.82"
REMOTE="/var/www/meyer.land/anti-trend/"
LOCAL_DIR="$(cd "$(dirname "$0")" && pwd)"

echo "→ Ensuring remote directory exists..."
ssh -i "$SSH_KEY" -o StrictHostKeyChecking=accept-new "$HOST" "mkdir -p $REMOTE"

echo "→ Rsyncing files..."
rsync -avz --delete \
  -e "ssh -i $SSH_KEY" \
  --exclude='.git' \
  --exclude='.gitignore' \
  --exclude='.DS_Store' \
  --exclude='deploy.sh' \
  --exclude='README.md' \
  --exclude='node_modules' \
  "$LOCAL_DIR/" "$HOST:$REMOTE"

echo ""
echo "✓ Deployed to https://meyer.land/anti-trend"
echo ""
echo "Note: if the URL 404s, the nginx location block for /anti-trend/"
echo "may need to be added to the site config on the server."
