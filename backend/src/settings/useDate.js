const useDate = ({ settings }) => {
  const { finrarmag_app_date_format } = settings;

  const dateFormat = finrarmag_app_date_format;

  return {
    dateFormat,
  };
};

module.exports = useDate;
