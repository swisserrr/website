module.exports = {
  apps: [
    {
      name: 'nextjs-app',
      script: 'node_modules/next/dist/bin/next',
      args: 'start -p 3000', // Specify the port if needed
      exec_mode: 'cluster',
      instances: '2', // Or a specific number of instances
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],

  deploy: {
    production: {
      key: 'WebsiteKeyPair.pem',
      user: 'ubuntu',
      host: '13.233.252.43',
      ref: 'origin/review',
      repo: 'git@bitbucket.org:emoha_elder_care/emoha-next-website.git',
      path: '/home/ubuntu',
      'pre-deploy-local': '',
      'post-deploy':
        'source ~/.nvm/nvm.sh && npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
      ssh_options: 'ForwordAgent=yes',
    },
  },
};
