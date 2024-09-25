import { Hono } from "hono";
import { renderer } from "./renderer";

const app = new Hono();

app.use(renderer);

app.get("/", (c) => {
  return c.render(
    <>
      <header class="header">
        <div class="logo">
          <a
            href="https://zerosum.world"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/static/images/header/logo.svg" alt="ZeroSum Logo" />
          </a>
        </div>
        <div class="header-icons">
          <div class="notification">
            <img
              src="/static/images/header/notificationBell.svg"
              alt="Notification Bell"
            />
          </div>
          <div class="amount">
            <span>$100,00</span> <img src="/static/images/header/zs.svg" />
            <img class="caret" src="/static/images/header/caret.svg" />
          </div>
          <div class="smiley">
            <img src="/static/images/header/smile.svg" alt="" />
          </div>
        </div>
      </header>

      <main>
        <img
          draggable="false"
          class="computer"
          src="/static/images/main/comp.webp"
          alt="Website is under maintenance"
        />
      </main>

      <nav>
        <a
          href="https://zerosum.world"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ul class="links">
            <li>
              <img src="/static/images/sidebar/cup.svg" />
            </li>
            <li>
              <img src="/static/images/sidebar/game.svg" />
            </li>
            <li>
              <img src="/static/images/sidebar/sword.svg" />
            </li>
            <li>
              <img src="/static/images/sidebar/dice.svg" />
            </li>
            <li>
              <img src="/static/images/sidebar/coins.svg" />
            </li>
          </ul>
        </a>
      </nav>
    </>
  );
});

export default app;
