export PNPM_HOME="/home/bb/.local/share/pnpm"
export PATH="$PNPM_HOME:$PATH"

netlify link
netlify build
netlify dev