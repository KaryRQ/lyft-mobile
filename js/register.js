$("#demo").intlTelInput();

// whether or not to allow the dropdown
allowDropdown: true,

// if there is just a dial code in the input: remove it on blur, and re-add it on focus
autoHideDialCode: true,

// add a placeholder in the input with an example number for the selected country
autoPlaceholder: "polite",

// modify the auto placeholder
customPlaceholder: null,

// append menu to a specific element
dropdownContainer: "",

// don't display these countries
excludeCountries: [],

// format the input value during initialisation
formatOnDisplay: true,

// geoIp lookup function
geoIpLookup: null,

// initial country
initialCountry: "",

// don't insert international dial codes
nationalMode: true,

// number type to use for placeholders
placeholderNumberType: "MOBILE",

// display only these countries
onlyCountries: [],

// the countries at the top of the list. defaults to united states and united kingdom
preferredCountries: [ "us", "gb" ],

// display the country dial code next to the selected flag so it's not part of the typed number
separateDialCode: false,

// specify the path to the libphonenumber script to enable validation/formatting
utilsScript: ""

// destroy
$("#demo").intlTelInput("destroy");

// Get the extension part of the current number
var extension = $("#demo").intlTelInput("getExtension");

// Get the current number in the given format
var intlNumber = $("#demo").intlTelInput("getNumber");

// Get the type (fixed-line/mobile/toll-free etc) of the current number. 
var numberType = $("#demo").intlTelInput("getNumberType");

// Get the country data for the currently selected flag.
var countryData = $("#demo").intlTelInput("getSelectedCountryData");

// Get more information about a validation error. 
var error = $("#demo").intlTelInput("get<a href="https://www.jqueryscript.net/tags.php?/Validation/">Validation</a>Error");

// Vali<a href="https://www.jqueryscript.net/time-clock/">date</a> the current number
var isValid = $("#demo").intlTelInput("isValidNumber");

// Load the utils.js script (included in the lib directory) to enable formatting/validation etc.
$("#demo").intlTelInput("loadUtils", "lib/libphonenumber/build/utils.js");

// Change the country selection
$("#demo").intlTelInput("selectCountry", "gb");

// Insert a number, and update the selected flag accordingly.
$("#demo").intlTelInput("setNumber", "+44 7733 123 456");