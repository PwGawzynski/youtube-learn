export const validateEnv = () => {
  if (
    __DEV__ &&
    !(
      process.env.EXPO_PUBLIC_YT_DATA_API_URL &&
      process.env.EXPO_PUBLIC_YT_DATA_API_KEY
    )
  ) {
    throw new Error(
      'Please set the EXPO_PUBLIC_YT_DATA_API_URL and EXPO_PUBLIC_YT_DATA_API_KEY in the .env file',
    );
  }
};
