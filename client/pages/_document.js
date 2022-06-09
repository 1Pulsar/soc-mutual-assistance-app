import { Html, Head, Main, NextScript } from 'next/document'
import {useSelector} from "react-redux";

export default function Document() {

    return (
        <Html>
            <Head >
                <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700;800&family=Nunito:wght@300;500;600;700&display=swap" rel="stylesheet" />
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
        </Html>
    )
}