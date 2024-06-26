export const CookieController = {
    getTokenCookies : (nameCookie)=>{
      const cookies = document.cookie?.split(";");
      // isAuthenticator.filter
      const acces_tokens =cookies?.filter(cookie => cookie.includes(nameCookie)); // Kiểm tra xem có access token có hay không
      return acces_tokens[0]?.split("=")[1] // lay value sau dau =;
    },
    DeleteCookie : (nameCookie)=>{
        document.cookie = `${nameCookie} =;expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; `
        // document.cookie = ''
      },
  }