function validateForm() {
  alert("Formularz został wysłany!");
  return true;
}

// Zegar
function updateClock() {
  const now = new Date();
  const options = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  };

  document.getElementById("clock").textContent = now.toLocaleTimeString(
    "pl-PL",
    options
  );
}

setInterval(updateClock, 1000);
updateClock();

//Cookies
document.addEventListener("DOMContentLoaded", function () {
  checkCookieConsent();
});

function checkCookieConsent() {
  const consent = localStorage.getItem("cookieConsent");
  if (!consent) {
    document.getElementById("cookie-banner").style.display = "block";
  } else if (consent === "settings") {
    applySettings();
  }
}

function acceptCookies() {
  localStorage.setItem("cookieConsent", "accepted");
  hideBanner();
  enableAllCookies();
}

function rejectCookies() {
  localStorage.setItem("cookieConsent", "rejected");
  hideBanner();
  disableAllCookies();
}

function openSettings() {
  document.getElementById("cookie-banner").style.display = "none";
  document.getElementById("cookie-settings").style.display = "block";
}

function saveSettings() {
  const analytics = document.getElementById("analyticsCookies").checked;
  const marketing = document.getElementById("marketingCookies").checked;

  const settings = {
    analytics: analytics,
    marketing: marketing,
  };

  localStorage.setItem("cookieConsent", "settings");
  localStorage.setItem("cookieSettings", JSON.stringify(settings));

  hideSettings();
  applySettings();
}

function hideBanner() {
  document.getElementById("cookie-banner").style.display = "none";
}

function hideSettings() {
  document.getElementById("cookie-settings").style.display = "none";
}

function applySettings() {
  const settings = JSON.parse(localStorage.getItem("cookieSettings"));
  if (settings) {
    if (settings.analytics) {
      enableAnalyticsCookies();
    }
    if (settings.marketing) {
      enableMarketingCookies();
    }
  }
}

function enableAllCookies() {
  enableAnalyticsCookies();
  enableMarketingCookies();
}

function disableAllCookies() {
  disableAnalyticsCookies();
  disableMarketingCookies();
}

function enableAnalyticsCookies() {
  console.log("Analityczne cookies włączone");
}

function enableMarketingCookies() {
  console.log("Marketingowe cookies włączone");
}

function disableAnalyticsCookies() {
  console.log("Analityczne cookies wyłączone");
}

function disableMarketingCookies() {
  console.log("Marketingowe cookies wyłączone");
}
