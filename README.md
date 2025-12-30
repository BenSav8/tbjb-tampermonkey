# TBJB Tampermonkey Port
tampermonkey port for TBJB made by [@dell-optiplex-790](https://github.com/dell-optiplex-790)  
since the TBJB vulnerability was fixed, you can now use this tampermonkey userscript to be able to use TBJB  
check out the original at [dell-optiplex-790/tbjb](https://github.com/dell-optiplex-790/tbjb)

# installation
## with tampermonkey
copy and paste the contents of [userscript.js](https://github.com/BenSav8/tbjb-tampermonkey/blob/main/userscript.js) into tampermonkey, save it, then turn the userscript on  
after doing so, you may refresh trollbox and it should have installed TBJB
## alternative (without tampermonkey)
in that case, you can paste this in your windows93 terminal: `eval(atob('JHN0b3JlLnNldCgnLmNvbmZpZy90cm9sbGJveC90YmpiaW5qZWN0LmpzJywgJ2lmKHR5cGVvZiBpbnN0YW5jZXM9PSJ1bmRlZmluZWQiKXtpbnN0YW5jZXM9JHdpbmRvdy5pbnN0YW5jZXN9ZWxzZXtsZXQgaW5zdGFuY2VzPSR3aW5kb3cuaW5zdGFuY2VzfWlmKHR5cGVvZiB0Ymluc3Q9PSJ1bmRlZmluZWQiKXt0Ymluc3Q9aW5zdGFuY2VzLmZpbmQoaW5zdD0+aW5zdD8uY2ZnPy50aXRsZT09PSJUcm9sbGJveCIpfWVsc2V7bGV0IHRiaW5zdD1pbnN0YW5jZXMuZmluZChpbnN0PT5pbnN0Py5jZmc/LnRpdGxlPT09IlRyb2xsYm94Iil9aWYodGJpbnN0KXtmZXRjaCgiaHR0cHM6Ly9iZW5zYXY4LmdpdGh1Yi5pby90YmpiLXRhbXBlcm1vbmtleS91c2Vyc2NyaXB0LmpzIikudGhlbihyZXNwb25zZT0+cmVzcG9uc2UudGV4dCgpKS50aGVuKHNjcmlwdD0+e3RiaW5zdC5lbC5pZnJhbWUuY29udGVudFdpbmRvdy5ldmFsKHNjcmlwdCk7JGFsZXJ0KCJUQkpCIGluamVjdGVkISIpfSl9ZWxzZXskYWxlcnQoIlRyb2xsYm94IGlzIG5vdCBydW5uaW5nOyBjb3VsZCBub3QgaW5qZWN0IFRCSkIuIil9Jyk7JHN0b3JlLnNldCgnZGVza3RvcC9JbmplY3QgVEJKQi5sbms0MicsICd7Imljb24iOiIvYy9zeXMvc2tpbnMvdzkzL2FwcHMvY2hhdC5naWYiLCJleGUiOiJqcyAvYS8uY29uZmlnL3Ryb2xsYm94L3RiamJpbmplY3QuanMiLCJ0aXRsZSI6IkluamVjdCBUQkpCIn0nKTtsb2NhdGlvbi5yZWxvYWQodHJ1ZSk='))` after this, your windows93 should refresh and there should be an "Inject TBJB" button somewhere in your desktop; click it AFTER opening trollbox, then TBJB should be injected

# usage
once you have TBJB, you can use the following features:
## colored text
you can add colored text using the following syntax: `$(color)`, replace color with any css color, examples: `$(#ff0000)red text` `$(green)green text` `$(rgb(0, 0, 255)blue text` (Note that CSS colors with parentheses have to be formatted like the last example)
## addons
you can use the `/store` command to open a menu to add addons (Note that this will kick you out of Trollbox) you can find addons [here](https://github.com/BenSav8/my-tbjb-addons/) or code them yourself using [this guide](https://github.com/BenSav8/tbjb-tampermonkey/blob/main/howtoaddon.md)
