FROM gitpod/workspace-full:latest

# Install pnpm
# TODO: Replace with verify install (https://github.com/pnpm/get.pnpm.io#verifying-files)
USER gitpod
RUN npm i -g pnpm

