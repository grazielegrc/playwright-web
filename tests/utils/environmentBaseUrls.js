const baseEnvUrl = {
  ci: {
      prefix: 'https://demoqa',
      suffix: '.com',
  },
  local: {    
      home: 'https://walkdog.vercel.app',
  },
  production: {
      api: 'https://demoqa.com',
      home: 'https://demoqa.com',
  },
  staging: {
      api: 'https://demoqa.com',
      home: 'https://demoqa.com',
  },
};

export default baseEnvUrl;