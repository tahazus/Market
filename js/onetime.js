// social-footer
class SocialFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <footer class="py-6 w-xl">
        <div class="flex lg:hidden p-3 pointer-events-auto">
          <a href="https://t.me/TAWSS" class="bg-red-900 hover:bg-red-800 px-4 py-3 rounded-r-xl border-2 border-white/50 mx-1">
          <img src="/Images/telegram.png" alt="telegram icon" loading="lazy">
          </a>
          <a href="https://steamcommunity.com/id/TahazuS" class="bg-red-900 hover:bg-red-800 px-4 py-3 rounded-sm border-2 border-white/50 mx-1">
          <img src="/Images/steam.png" alt="steam icon" loading="lazy">
          </a>
          <a href="https://x.com/TahaHadian" class="bg-red-900 hover:bg-red-800 px-4 py-3 rounded-sm border-2 border-white/50 mx-1">
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
        <a href="https://t.me/TAWSS" class="bg-red-900 hover:bg-red-800 px-4 py-3 rounded-t-xl border-2 border-white/50">
        <img src="/Images/telegram.png" alt="telegram icon" loading="lazy">
        </a>
        <a href="https://steamcommunity.com/id/TahazuS" class="bg-red-900 hover:bg-red-800 px-4 py-3 rounded-sm border-2 border-white/50">
        <img src="/Images/steam.png" alt="steam icon" loading="lazy">
        </a>
        <a href="https://x.com/TahaHadian" class="bg-red-900 hover:bg-red-800 px-4 py-3 rounded-sm border-2 border-white/50">
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

//header Name
class HeaderName extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <header class="text-center py-8 m-auto">
        <a href="/" class="relative inline-block pointer-events-auto">
          <span class="absolute -top-5 right-12 md:-top-5 md:right-16 bg-amber-300 text-stone-900 text-xs px-2 py-0.5 rounded-full">بتا</span>
          <h1 class="text-4xl md:text-5xl font-bold">تـــاز</h1>
        </a>
    </header>
    `;
  }
}

customElements.define('header-name', HeaderName);

//alert
class AlertHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="flex justify-center pointer-events-auto text-l mx-4">
        <a href="https://t.me/TahazuS" class="flex items-center bg-amber-300 text-black hover:bg-amber-400 px-4 py-3 rounded-md border-2 border-white/50">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 ml-2 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m0-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z" />
        </svg>
        تمام خریدها از در تلگرام انجام می‌شود برای هر گونه سوال یا استعلام قیمت، به tahazus@ پیام دهید.</a>
    </div>
    `;
  }
}

customElements.define('alert-header', AlertHeader);
