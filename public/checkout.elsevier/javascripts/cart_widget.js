/*
 classList polyfill - https://github.com/remy/polyfills/blob/master/classList.js
*/
! function() {
  function t(t) {
      this.el = t;
      for (var n = t.className.replace(/^\s+|\s+$/g, "").split(/\s+/), i = 0; i < n.length; i++) e.call(this, n[i])
  }

  function n(t, n, i) {
      Object.defineProperty ? Object.defineProperty(t, n, {
          get: i
      }) : t.__defineGetter__(n, i)
  }
  if (!("undefined" == typeof window.Element || "classList" in document.documentElement)) {
      var i = Array.prototype,
          e = i.push,
          s = i.splice,
          o = i.join;
      t.prototype = {
          add: function(t) {
              this.contains(t) || (e.call(this, t), this.el.className = this.toString())
          },
          contains: function(t) {
              return -1 != this.el.className.indexOf(t)
          },
          item: function(t) {
              return this[t] || null
          },
          remove: function(t) {
              if (this.contains(t)) {
                  for (var n = 0; n < this.length && this[n] != t; n++);
                  s.call(this, n, 1), this.el.className = this.toString()
              }
          },
          toString: function() {
              return o.call(this, " ")
          },
          toggle: function(t) {
              return this.contains(t) ? this.remove(t) : this.add(t), this.contains(t)
          }
      }, window.DOMTokenList = t, n(Element.prototype, "classList", function() {
          return new t(this)
      })
  }
}();

document.addEventListener('DOMContentLoaded', function(event) {
  var xmlhttp = new XMLHttpRequest();
  var shoppingCartContainer = document.querySelector('.shopping-cart-container');
  var shoppingCartCountSpan = document.querySelector('.shopping-cart-count');
  var shoppingCartCountContainer = document.querySelector('#shopping-cart-count-container');
  var isGlobalIntegratedHeader = document.querySelector("#gh-cnt") ? true : false;
  var initials;
  xmlhttp.onload = function() {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
          var cart_status = JSON.parse(xmlhttp.responseText);
          if (cart_status) {
              if (cart_status.total_cart_items && shoppingCartCountSpan) {
                  shoppingCartCountSpan.innerHTML = cart_status.total_cart_items;
                  shoppingCartCountSpan.classList.remove('start');
                  if (shoppingCartCountContainer) {
                      shoppingCartCountContainer.classList.remove('hide');
                  }

                  if (cart_status.total_cart_items.toString().length === 2) {
                      shoppingCartCountSpan.style.fontSize = '0.9rem';
                  } else if (cart_status.total_cart_items.toString().length > 2) {
                      shoppingCartCountSpan.style.fontSize = '0.6rem';
                  } else {
                      shoppingCartCountSpan.style.fontSize = '1rem';
                  }
              }
              if (isGlobalIntegratedHeader) {
                  if (cart_status.logged_in) {
                      initials = cart_status.firstName.charAt(0) + cart_status.lastName.charAt(0);
                      document.querySelector('#gh-profile-cnt').classList.remove('gu-hide');
                      document.querySelector('#gh-signin-btn').classList.add('gu-hide');
                      document.querySelector('.gh-user-fname').innerHTML = cart_status.firstName + " " + cart_status.lastName;
                      document.querySelector('.gh-user-email').innerHTML = cart_status.email;

                      document.querySelector('#gh-m-profile-cnt').classList.remove('gu-hide');
                      document.querySelector('#gh-m-signin').classList.add('gu-hide');
                      document.querySelector('.gh-mobile .gh-user-email').innerHTML = cart_status.email;
                      var list = document.querySelectorAll('.gh-initials');
                      for (var l = 0; l < list.length; l++) {
                          list[l].innerHTML = initials;
                      }
                  } else {
                      document.querySelector('#gh-profile-cnt').classList.add('gu-hide');
                      document.querySelector('#gh-signin-btn').classList.remove('gu-hide');

                      document.querySelector('#gh-m-profile-cnt').classList.add('gu-hide');
                      document.querySelector('#gh-m-signin').classList.remove('gu-hide');
                  }
              }
              if (shoppingCartContainer) {
                  if (cart_status.logged_in) {
                      document.querySelector('.dd-account').classList.remove('hide');
                      document.querySelector('.dd-logout').classList.remove('hide');
                      document.querySelector('.dd-login-register').classList.add('hide');
                  } else {
                      document.querySelector('.dd-account').classList.add('hide');
                      document.querySelector('.dd-logout').classList.add('hide');
                      document.querySelector('.dd-login-register').classList.remove('hide');
                  }
              }
              if (cart_status.criteo_hash) {
                  document.querySelector('#criteo-hash').value = cart_status.criteo_hash;
              } else {
                  document.querySelector('#criteo-hash').value = '';
              }
          }
      }
  };
  xmlhttp.open('GET', ECOMM_CART_URL, true);
  xmlhttp.withCredentials = true;
  xmlhttp.send();

  if (shoppingCartContainer) {
      shoppingCartContainer.addEventListener('click', function(event) {
          this.classList.toggle('show-menu');
      }, false);
  }

  document.body.addEventListener('click', function(event) {
      if (shoppingCartContainer && shoppingCartContainer.classList.contains('show-menu') &&
          !isDescendant(document.querySelector('.shopping-cart-content-container'), event.target)) {
          shoppingCartContainer.classList.toggle('show-menu');
      }
  });

  var dropdownItems = document.querySelectorAll('.shopping-cart-dropdown a');
  for (var i = 0; i < dropdownItems.length; i++) {
      var mouseDown = false;
      dropdownItems[i].addEventListener('mousedown', function(event) {
          mouseDown = true;
      });
      dropdownItems[i].addEventListener('focus', function(event) {
          if (!mouseDown) {
              if (!shoppingCartContainer.classList.contains('show-menu')) {
                  shoppingCartContainer.classList.toggle('show-menu');
              }
              mouseDown = false;
          }
      });
      dropdownItems[i].addEventListener('blur', function() {
          if (!mouseDown) {
              shoppingCartContainer.classList.toggle('show-menu');
              mouseDown = false;
          }
      });
  }
}, false);

function isDescendant(parent, child) {
  var node = child.parentNode;
  while (node != null) {
      if (node == parent) {
          return true;
      }
      node = node.parentNode;
  }
  return false;
}