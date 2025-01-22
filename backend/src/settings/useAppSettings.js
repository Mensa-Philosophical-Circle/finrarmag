const useAppSettings = () => {
  let settings = {};
  settings['finrarmag_app_email'] = 'noreply@finrarmagapp.com';
  settings['finrarmag_base_url'] = 'https://cloud.finrarmagapp.com';
  return settings;
};

module.exports = useAppSettings;
