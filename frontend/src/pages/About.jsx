import { Button, Result } from 'antd';

import useLanguage from '@/locale/useLanguage';

const About = () => {
  const translate = useLanguage();
  return (
    <Result
      status="info"
      title={'finrarmag'}
      subTitle={translate('Do you need help on customize of this app')}
      extra={
        <>
          <p>
            Website : <a href="https://www.finrarmagapp.com">www.finrarmagapp.com</a>{' '}
          </p>
          <p>
            GitHub :{' '}
            <a href="https://github.com/finrarmag/finrarmag">
              https://github.com/finrarmag/finrarmag
            </a>
          </p>
          <Button
            type="primary"
            onClick={() => {
              window.open(`https://www.finrarmagapp.com/contact-us/`);
            }}
          >
            {translate('Contact us')}
          </Button>
        </>
      }
    />
  );
};

export default About;
