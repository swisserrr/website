module.exports = {
  apps: [
    {
      name: 'nextjs-app',
      script: 'server.js', // Use your custom server instead of Next.js directly
      instances: '2', // Use all available CPU cores
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '1G', // Increase memory allocation
      node_args: '--max-old-space-size=1024', // Prevent memory issues
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
      exp_backoff_restart_delay: 100, // Gradual restart delay
      listen_timeout: 10000, // Wait longer for app to boot
      kill_timeout: 3000, // Grace period to finish requests
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
