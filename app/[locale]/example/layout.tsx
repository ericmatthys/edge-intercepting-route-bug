import Link from "next/link";
import { ReactNode } from "react";

export default function Layout({ children, modal }: { children: ReactNode; modal: ReactNode }) {
    return (
      <div>
        <ul>
          <li><Link href="/en/example/working">Intercept /en/example/working</Link></li>
          <li><Link href="/en/broken">Intercept /en/broken</Link></li>
        </ul>

        {children}
        {modal}
      </div>
    );
  }