// social-footer
class SocialFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <footer class="py-6 w-xl">
        <div class="flex lg:hidden p-3 pointer-events-auto">
          <a href="https://t.me/TahazuS" class="bg-red-900 hover:bg-red-800 px-4 py-3 rounded-r-xl border-2 border-white/50 mx-1">
          <img src="/Images/telegram.png" alt="telegram icon" loading="lazy">
          </a>
          <a href="https://steamcommunity.com/id/TahazuS" class="bg-red-900 hover:bg-red-800 px-4 py-3 rounded-sm border-2 border-white/50 mx-1">
          <img src="/Images/steam.png" alt="steam icon" loading="lazy">
          </a>
          <a href="https://twitter.com/TahaHadian" class="bg-red-900 hover:bg-red-800 px-4 py-3 rounded-sm border-2 border-white/50 mx-1">
          <img src="/Images/twitter.png" alt="x.com icon" loading="lazy">
          </a>
          <a href="https://discord.gg/a7PrkNjXWk" class="bg-red-900 hover:bg-red-800 px-4 py-3 rounded-l-xl border-2 border-white/50 mx-1">
          <img src="/Images/discord.png" alt="discord icon" loading="lazy">
          </a>
        </div>
        <p class="pointer-events-auto text-center mt-5">تمامی حقوق برای تـــاز محفوظ میباشد.</p>
    </footer>
    `;
  }
}

customElements.define('social-footer', SocialFooter);

//social-right side
class SocialRight extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="hidden lg:flex fixed top-1/3 right-4 z-10 flex-col space-y-1 pointer-events-auto">
        <a href="https://t.me/TahazuS" class="bg-red-900 hover:bg-red-800 px-4 py-3 rounded-t-xl border-2 border-white/50">
        <img src="/Images/telegram.png" alt="telegram icon" loading="lazy">
        </a>
        <a href="https://steamcommunity.com/id/TahazuS" class="bg-red-900 hover:bg-red-800 px-4 py-3 rounded-sm border-2 border-white/50">
        <img src="/Images/steam.png" alt="steam icon" loading="lazy">
        </a>
        <a href="https://twitter.com/TahaHadian" class="bg-red-900 hover:bg-red-800 px-4 py-3 rounded-sm border-2 border-white/50">
        <img src="/Images/twitter.png" alt="x.com icon" loading="lazy">
        </a>
        <a href="https://discord.gg/a7PrkNjXWk" class="bg-red-900 hover:bg-red-800 px-4 py-3 rounded-b-xl border-2 border-white/50">
        <img src="/Images/discord.png" alt="discord icon" loading="lazy">
        </a>
    </div>
    `;
  }
}

customElements.define('social-right', SocialRight);