import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Auth0Provider } from "@auth0/auth0-react";
console.log(process.env.CF_PAGES);
export default function App({ Component, pageProps }: AppProps) {
  return <Auth0Provider
    domain='dev-l5iyg4ax8rlhl2ha.us.auth0.com'
    clientId='3TYRMTQ9odZIKGXMy1ZyKkKNtBm7QgT4'
    authorizationParams={{
      redirect_uri: process.env.CF_PAGES === "1" ? "https://artyroom.pages.dev" : "http://localhost:3000"
    }}
  >
    <Component {...pageProps} />
  </Auth0Provider>
}
