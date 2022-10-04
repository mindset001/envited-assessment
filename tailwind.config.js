/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        purpleDark: "#240D57",
        purpleLight: "#501fc1",
        purpleNormal: "#8456EC",
        pinkNormal: "#E87BF8",
       "s-purple-1":"#0CCB6FF",
       "s-purple-2":"#EDE5FF",
        "s-purple-3": "#F6F2FF",
       "alert-pink":"#FFD7E0",
       "alert-red":"#E61445",
       "alert-light-green":"#D3FFE2",
        "alert-dark-green": "#00805E",
        grey: {
         "100":"#FBFAFF",
         "200":"#F2F2F2",
         "300":"#E0E0E0",
         "400":"#BDBDBD",
         "500":"#828282",
         "600":"#4F4F4F",
       },

        
      },
    },
  },
  plugins: [],
};
