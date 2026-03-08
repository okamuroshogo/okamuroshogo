import type { Dictionary } from '@/lib/i18n/types';

export default function Footer({ dict }: { dict: Dictionary }) {
  return (
    <footer className="py-8 bg-mirai-900 border-t border-white/10">
      <div className="section-container text-center">
        <p className="text-sm text-mirai-300/60">
          &copy; {new Date().getFullYear()} {dict.footer.copyright}
        </p>
      </div>
    </footer>
  );
}
