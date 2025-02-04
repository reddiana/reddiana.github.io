import { i18n } from "../../i18n"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"

const NotFound: QuartzComponent = ({ cfg }: QuartzComponentProps) => {
  // If baseUrl contains a pathname after the domain, use this as the home link
  const url = new URL(`https://${cfg.baseUrl ?? "example.com"}`)
  const baseDir = url.pathname

  return (
    <div
      style={{
        backgroundImage: 'url("/static/404_full_moon.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '60vw',
        width: '100%',
      }}
    >
      <article class="popover-hint">
        <h1>404</h1>
        <p>{i18n(cfg.locale).pages.error.notFound}</p>
        <a href={baseDir}>{i18n(cfg.locale).pages.error.home}</a>
      </article>
    </div>
  )
}

export default (() => NotFound) satisfies QuartzComponentConstructor
