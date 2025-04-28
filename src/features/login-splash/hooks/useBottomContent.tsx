import { useRouter } from 'expo-router';
import * as WebBrowser from 'expo-web-browser';

const PRIVACY_POLICY_URL =
  'https://www.thewidlarzgroup.com/legal/privacy-policy-cookies-1-2';
const TERMS_OF_SERVICE_URL =
  'https://www.thewidlarzgroup.com/legal/terms-of-service';

export function useBottomContent() {
  const handlePrivacyPolicy = () => {
    WebBrowser.openBrowserAsync(PRIVACY_POLICY_URL);
  };

  const handleTerms = () => {
    WebBrowser.openBrowserAsync(TERMS_OF_SERVICE_URL);
  };

  const router = useRouter();

  const handleLogin = () => {
    router.replace('/(auth)/(tab)');
  };

  return { handleLogin, handlePrivacyPolicy, handleTerms };
}
