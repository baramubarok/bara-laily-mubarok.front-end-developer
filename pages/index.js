import styles from '../styles/Home.module.css';
import Link from 'next/link';
import LayoutDefault from './../layouts/default';

export default function Home() {
  const html = (
    <LayoutDefault>
      <div>
        <h4 className="text-center">Github User</h4>
      </div>
    </LayoutDefault>
  )

  return html
}
