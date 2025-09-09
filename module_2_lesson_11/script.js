//
// UTILITIES
//

Array.prototype.sample = function () {
  return this[Math.floor(Math.random() * this.length)];
};

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//
// UTILITIES END
//

const countryCapitals = [
  { country: 'Afghanistan', capital: 'Kabul' },
  { country: 'Albania', capital: 'Tirana' },
  { country: 'Algeria', capital: 'Algiers' },
  { country: 'Andorra', capital: 'Andorra la Vella' },
  { country: 'Angola', capital: 'Luanda' },
  { country: 'Antigua and Barbuda', capital: "Saint John's" },
  { country: 'Argentina', capital: 'Buenos Aires' },
  { country: 'Armenia', capital: 'Yerevan' },
  { country: 'Australia', capital: 'Canberra' },
  { country: 'Austria', capital: 'Vienna' },
  { country: 'Azerbaijan', capital: 'Baku' },
  { country: 'Bahamas', capital: 'Nassau' },
  { country: 'Bahrain', capital: 'Manama' },
  { country: 'Bangladesh', capital: 'Dhaka' },
  { country: 'Barbados', capital: 'Bridgetown' },
  { country: 'Belarus', capital: 'Minsk' },
  { country: 'Belgium', capital: 'Brussels' },
  { country: 'Belize', capital: 'Belmopan' },
  { country: 'Benin', capital: 'Porto-Novo' },
  { country: 'Bhutan', capital: 'Thimphu' },
  { country: 'Bolivia', capital: 'Sucre' },
  { country: 'Bosnia and Herzegovina', capital: 'Sarajevo' },
  { country: 'Botswana', capital: 'Gaborone' },
  { country: 'Brazil', capital: 'Brasília' },
  { country: 'Brunei', capital: 'Bandar Seri Begawan' },
  { country: 'Bulgaria', capital: 'Sofia' },
  { country: 'Burkina Faso', capital: 'Ouagadougou' },
  { country: 'Burundi', capital: 'Gitega' },
  { country: 'Cabo Verde', capital: 'Praia' },
  { country: 'Cambodia', capital: 'Phnom Penh' },
  { country: 'Cameroon', capital: 'Yaoundé' },
  { country: 'Canada', capital: 'Ottawa' },
  { country: 'Central African Republic', capital: 'Bangui' },
  { country: 'Chad', capital: "N'Djamena" },
  { country: 'Chile', capital: 'Santiago' },
  { country: 'China', capital: 'Beijing' },
  { country: 'Colombia', capital: 'Bogotá' },
  { country: 'Comoros', capital: 'Moroni' },
  { country: 'Congo', capital: 'Brazzaville' },
  { country: 'Costa Rica', capital: 'San José' },
  { country: "Côte d'Ivoire", capital: 'Yamoussoukro' },
  { country: 'Croatia', capital: 'Zagreb' },
  { country: 'Cuba', capital: 'Havana' },
  { country: 'Cyprus', capital: 'Nicosia' },
  { country: 'Czech Republic', capital: 'Prague' },
  { country: 'Denmark', capital: 'Copenhagen' },
  { country: 'Djibouti', capital: 'Djibouti' },
  { country: 'Dominica', capital: 'Roseau' },
  { country: 'Dominican Republic', capital: 'Santo Domingo' },
  { country: 'Ecuador', capital: 'Quito' },
  { country: 'Egypt', capital: 'Cairo' },
  { country: 'El Salvador', capital: 'San Salvador' },
  { country: 'Equatorial Guinea', capital: 'Malabo' },
  { country: 'Eritrea', capital: 'Asmara' },
  { country: 'Estonia', capital: 'Tallinn' },
  { country: 'Eswatini', capital: 'Lobamba' },
  { country: 'Ethiopia', capital: 'Addis Ababa' },
  { country: 'Fiji', capital: 'Suva' },
  { country: 'Finland', capital: 'Helsinki' },
  { country: 'France', capital: 'Paris' },
  { country: 'Gabon', capital: 'Libreville' },
  { country: 'Gambia', capital: 'Banjul' },
  { country: 'Georgia', capital: 'Tbilisi' },
  { country: 'Germany', capital: 'Berlin' },
  { country: 'Ghana', capital: 'Accra' },
  { country: 'Greece', capital: 'Athens' },
  { country: 'Grenada', capital: "Saint George's" },
  { country: 'Guatemala', capital: 'Guatemala City' },
  { country: 'Guinea', capital: 'Conakry' },
  { country: 'Guinea-Bissau', capital: 'Bissau' },
  { country: 'Guyana', capital: 'Georgetown' },
  { country: 'Haiti', capital: 'Port-au-Prince' },
  { country: 'Honduras', capital: 'Tegucigalpa' },
  { country: 'Hungary', capital: 'Budapest' },
  { country: 'Iceland', capital: 'Reykjavik' },
  { country: 'India', capital: 'New Delhi' },
  { country: 'Indonesia', capital: 'Jakarta' },
  { country: 'Iran', capital: 'Tehran' },
  { country: 'Iraq', capital: 'Baghdad' },
  { country: 'Ireland', capital: 'Dublin' },
  { country: 'Israel', capital: 'Jerusalem' }, // Note: Disputed
  { country: 'Italy', capital: 'Rome' },
  { country: 'Jamaica', capital: 'Kingston' },
  { country: 'Japan', capital: 'Tokyo' },
  { country: 'Jordan', capital: 'Amman' },
  { country: 'Kazakhstan', capital: 'Nur-Sultan' },
  { country: 'Kenya', capital: 'Nairobi' },
  { country: 'Kiribati', capital: 'South Tarawa' },
  { country: 'Kuwait', capital: 'Kuwait City' },
  { country: 'Kyrgyzstan', capital: 'Bishkek' },
  { country: 'Laos', capital: 'Vientiane' },
  { country: 'Latvia', capital: 'Riga' },
  { country: 'Lebanon', capital: 'Beirut' },
  { country: 'Lesotho', capital: 'Maseru' },
  { country: 'Liberia', capital: 'Monrovia' },
  { country: 'Libya', capital: 'Tripoli' },
  { country: 'Liechtenstein', capital: 'Vaduz' },
  { country: 'Lithuania', capital: 'Vilnius' },
  { country: 'Luxembourg', capital: 'Luxembourg' },
  { country: 'Madagascar', capital: 'Antananarivo' },
  { country: 'Malawi', capital: 'Lilongwe' },
  { country: 'Malaysia', capital: 'Kuala Lumpur' }, // Putrajaya is administrative
  { country: 'Maldives', capital: 'Malé' },
  { country: 'Mali', capital: 'Bamako' },
  { country: 'Malta', capital: 'Valletta' },
  { country: 'Marshall Islands', capital: 'Majuro' },
  { country: 'Mauritania', capital: 'Nouakchott' },
  { country: 'Mauritius', capital: 'Port Louis' },
  { country: 'Mexico', capital: 'Mexico City' },
  { country: 'Micronesia', capital: 'Palikir' },
  { country: 'Moldova', capital: 'Chisinau' },
  { country: 'Monaco', capital: 'Monaco' },
  { country: 'Mongolia', capital: 'Ulaanbaatar' },
  { country: 'Montenegro', capital: 'Podgorica' },
  { country: 'Morocco', capital: 'Rabat' },
  { country: 'Mozambique', capital: 'Maputo' },
  { country: 'Myanmar', capital: 'Naypyidaw' },
  { country: 'Namibia', capital: 'Windhoek' },
  { country: 'Nauru', capital: 'Yaren' }, // No official capital
  { country: 'Nepal', capital: 'Kathmandu' },
  { country: 'Netherlands', capital: 'Amsterdam' }, // The Hague is seat of govt
  { country: 'New Zealand', capital: 'Wellington' },
  { country: 'Nicaragua', capital: 'Managua' },
  { country: 'Niger', capital: 'Niamey' },
  { country: 'Nigeria', capital: 'Abuja' },
  { country: 'North Korea', capital: 'Pyongyang' },
  { country: 'North Macedonia', capital: 'Skopje' },
  { country: 'Norway', capital: 'Oslo' },
  { country: 'Oman', capital: 'Muscat' },
  { country: 'Pakistan', capital: 'Islamabad' },
  { country: 'Palau', capital: 'Ngerulmud' },
  { country: 'Panama', capital: 'Panama City' },
  { country: 'Papua New Guinea', capital: 'Port Moresby' },
  { country: 'Paraguay', capital: 'Asunción' },
  { country: 'Peru', capital: 'Lima' },
  { country: 'Philippines', capital: 'Manila' },
  { country: 'Poland', capital: 'Warsaw' },
  { country: 'Portugal', capital: 'Lisbon' },
  { country: 'Qatar', capital: 'Doha' },
  { country: 'Romania', capital: 'Bucharest' },
  { country: 'Russia', capital: 'Moscow' },
  { country: 'Rwanda', capital: 'Kigali' },
  { country: 'Saint Kitts and Nevis', capital: 'Basseterre' },
  { country: 'Saint Lucia', capital: 'Castries' },
  { country: 'Saint Vincent and the Grenadines', capital: 'Kingstown' },
  { country: 'Samoa', capital: 'Apia' },
  { country: 'San Marino', capital: 'San Marino' },
  { country: 'Sao Tome and Principe', capital: 'São Tomé' },
  { country: 'Saudi Arabia', capital: 'Riyadh' },
  { country: 'Senegal', capital: 'Dakar' },
  { country: 'Serbia', capital: 'Belgrade' },
  { country: 'Seychelles', capital: 'Victoria' },
  { country: 'Sierra Leone', capital: 'Freetown' },
  { country: 'Singapore', capital: 'Singapore' },
  { country: 'Slovakia', capital: 'Bratislava' },
  { country: 'Slovenia', capital: 'Ljubljana' },
  { country: 'Solomon Islands', capital: 'Honiara' },
  { country: 'Somalia', capital: 'Mogadishu' },
  { country: 'South Africa', capital: 'Bloemfontein' },
  { country: 'South Korea', capital: 'Seoul' },
  { country: 'South Sudan', capital: 'Juba' },
  { country: 'Spain', capital: 'Madrid' },
  { country: 'Sri Lanka', capital: 'Colombo' },
  { country: 'Sudan', capital: 'Khartoum' },
  { country: 'Suriname', capital: 'Paramaribo' },
  { country: 'Sweden', capital: 'Stockholm' },
  { country: 'Switzerland', capital: 'Bern' },
  { country: 'Syria', capital: 'Damascus' },
  { country: 'Taiwan', capital: 'Taipei' }, // Note: Disputed
  { country: 'Tajikistan', capital: 'Dushanbe' },
  { country: 'Tanzania', capital: 'Dodoma' },
  { country: 'Thailand', capital: 'Bangkok' },
  { country: 'Timor-Leste', capital: 'Dili' },
  { country: 'Togo', capital: 'Lomé' },
  { country: 'Tonga', capital: "Nuku'alofa" },
  { country: 'Trinidad and Tobago', capital: 'Port of Spain' },
  { country: 'Tunisia', capital: 'Tunis' },
  { country: 'Turkey', capital: 'Ankara' },
  { country: 'Turkmenistan', capital: 'Ashgabat' },
  { country: 'Tuvalu', capital: 'Funafuti' },
  { country: 'Uganda', capital: 'Kampala' },
  { country: 'Ukraine', capital: 'Kyiv' },
  { country: 'United Arab Emirates', capital: 'Abu Dhabi' },
  { country: 'United Kingdom', capital: 'London' },
  { country: 'United States', capital: 'Washington' },
  { country: 'Uruguay', capital: 'Montevideo' },
  { country: 'Uzbekistan', capital: 'Tashkent' },
  { country: 'Vanuatu', capital: 'Port Vila' },
  { country: 'Vatican City', capital: 'Vatican City' },
  { country: 'Venezuela', capital: 'Caracas' },
  { country: 'Vietnam', capital: 'Hanoi' },
  { country: 'Yemen', capital: "Sana'a" }, // Gov't temporarily in Aden
  { country: 'Zambia', capital: 'Lusaka' },
  { country: 'Zimbabwe', capital: 'Harare' },
];

const limits = [
  {
    name: 'Good',
    min: 0,
    max: 50,
    color: '#009966',
  },
  {
    name: 'Moderate',
    min: 51,
    max: 100,
    color: '#ffde33',
  },
  {
    name: 'Unhealthy1',
    min: 101,
    max: 150,
    color: '#ff9933',
  },
  {
    name: 'Unhealthy2',
    min: 151,
    max: 200,
    color: '#cc0033',
  },
  {
    name: 'Unhealthy3',
    min: 201,
    max: 300,
    color: '#660099',
  },
  {
    name: 'Hazardous',
    min: 301,
    max: 9999999,
    color: '#7e0023',
  },
];

function getApiUrl(city) {
  // prettier-ignore
  return `https://api.waqi.info/feed/${city.replaceAll(' ', '')}/?token=ced9442790417356fb2bd305628ef1d657742c58`;
}

function getAqiLevel(aqi) {
  let l;

  limits.forEach((limit) => {
    if (aqi >= limit.min && aqi <= limit.max) {
      l = limit;
    }
  });

  return l;
}

function createElementWithText(
  container,
  containerWidth,
  containerHeight,
  city,
  aqi
) {
  const element = document.createElement('div');
  element.innerText = city;
  container.appendChild(element);

  const aqiLevel = getAqiLevel(aqi);
  const { width, height } = element.getBoundingClientRect();
  element.style.left = `${getRandomInt(0, containerWidth - width)}px`;
  element.style.top = `${getRandomInt(0, containerHeight - height)}px`;
  element.style.backgroundColor = aqiLevel.color;
}

function init() {
  const container = document.getElementById('artwork');
  const { width, height } = container.getBoundingClientRect();

  setInterval(() => {
    const city = countryCapitals.sample().capital;
    const url = getApiUrl(city);

    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        const { aqi } = result.data;

        if (aqi && aqi != '-') {
          createElementWithText(container, width, height, city, aqi);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, 300);
}

document.addEventListener('DOMContentLoaded', () => {
  init();
});
