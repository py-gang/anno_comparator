import { Fragment } from "react";
import Head from 'next/head';

export default () => (
  <Fragment>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <title>Anno Web Viewer</title>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Overpass%20Mono" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans" />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.4/css/all.css" />
      <link rel="stylesheet" href="https://unpkg.com/normalize.css@8.0.1/normalize.css" />
    </Head>
    <style jsx global>{`
      :root {
        font-family: Helvetica, "Open Sans", Arial, sans-serif;
        --color-lightest:      #fff;
        --color-light:         #f0f0f0;
        --color-dark:          #333;
        --color-neutral:       #ddd;
        --color-neutralDarker: #aaa;
    
        --color-accent:        #428bca;
        --color-accentFocus:   #5bc0de;
        --color-alert:         #d9534f;
        --color-positive:      #5cb85c;
        
        --default-padding: 0.3rem;
        --default-margin: 0.3rem;
        --default-radius: 0.3rem;
        --default-border-width: 0;
           
        display:    flex;
        flex-flow:  column;
        min-height: 100%;
        min-width:  100%;
      }
      html {
        box-sizing: border-box;
      }     
      *, *:before, *:after {
        box-sizing: inherit;
      }
      body { 
        background: var(--color-light);
        color: var(--color-dark);
        font-family: Helvetica, "Open Sans", Arial, sans-serif;
        min-height: 100%;
        min-width: 100%;
        padding: 1rem;
        margin: 0;
      }
    `}</style>
  </Fragment>
)
