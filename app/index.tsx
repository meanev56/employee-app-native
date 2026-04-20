import { Redirect } from "expo-router";

/**
 * Root index screen - Redirects users to the main home layout
 */
export default function Index() {
  return <Redirect href="/(home)" />;
}