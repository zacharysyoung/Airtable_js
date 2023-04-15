/* globals base, input */
/**
 * @typedef KeyframeJSON
 * @type {{ key: number, desc: string }}
 */

/**
 * @typedef AttendeeJSON
 * @type {{ id: number, name: string, keyframe: number }}
 */

/**
 * @typedef PrizeJSON
 * @type {{ id: number, attendID: number, name: string, mailAddr: string, keyframe: number }}
 */

/** @type {KeyframeJSON[]} */
const jsonKF = [
    { key: 1, desc: 'Add attendance' },
    { key: 2, desc: 'First batch of claims' },
    { key: 3, desc: 'Davie\'s claim' },
    { key: 4, desc: 'Erin\'s 1st claim' },
    { key: 1000, desc: 'Erin\'s 2nd claim' },
    { key: 20, desc: 'Batch of 100+' },
];

/** @type {AttendeeJSON[]} */
const jsonAtd = [
    { id: 1, name: 'Alice', keyframe: 1 },
    { id: 2, name: 'Bobby', keyframe: 1 },
    { id: 3, name: 'Camille', keyframe: 1 },
    { id: 4, name: 'Davie', keyframe: 1 },
    { id: 5, name: 'Erin', keyframe: 1 },
    { id: 6, name: 'Fredek Matuschek', keyframe: 20 },
    { id: 7, name: 'Karine Hanney', keyframe: 20 },
    { id: 8, name: 'Dunn Ancliffe', keyframe: 20 },
    { id: 9, name: 'Myranda Dongall', keyframe: 20 },
    { id: 10, name: 'Missie Caitlin', keyframe: 20 },
    { id: 11, name: 'Zelda Tharme', keyframe: 20 },
    { id: 12, name: 'Lowrance Szymanek', keyframe: 20 },
    { id: 13, name: 'Adlai Bonnaire', keyframe: 20 },
    { id: 14, name: 'Joyous Berndtsson', keyframe: 20 },
    { id: 15, name: 'Hamlin Gallehawk', keyframe: 20 },
    { id: 16, name: 'Mathias Gouinlock', keyframe: 20 },
    { id: 17, name: 'Augy Attridge', keyframe: 20 },
    { id: 18, name: 'Fawn Briscow', keyframe: 20 },
    { id: 19, name: 'Benn Carous', keyframe: 20 },
    { id: 20, name: 'Joletta Riccardi', keyframe: 20 },
    { id: 21, name: 'Shellysheldon Arnauduc', keyframe: 20 },
    { id: 22, name: 'Jenni Ordish', keyframe: 20 },
    { id: 23, name: 'Anna-maria Auchterlonie', keyframe: 20 },
    { id: 24, name: 'Ade Matveichev', keyframe: 20 },
    { id: 25, name: 'Glad De Goey', keyframe: 20 },
    { id: 26, name: 'Bevvy Barten', keyframe: 20 },
    { id: 27, name: 'Shirley Dietz', keyframe: 20 },
    { id: 28, name: 'Silvain Napolitano', keyframe: 20 },
    { id: 29, name: 'Gerhardine Tome', keyframe: 20 },
    { id: 30, name: 'Eden Tembridge', keyframe: 20 },
    { id: 31, name: 'Marna Kornes', keyframe: 20 },
    { id: 32, name: 'Roberto Bly', keyframe: 20 },
    { id: 33, name: 'Dexter Winchurst', keyframe: 20 },
    { id: 34, name: 'Fletch Elkington', keyframe: 20 },
    { id: 35, name: 'Taddeusz Frostdick', keyframe: 20 },
    { id: 36, name: 'Monah Mulvihill', keyframe: 20 },
    { id: 37, name: 'Herbie Coldridge', keyframe: 20 },
    { id: 38, name: 'Laura Riha', keyframe: 20 },
    { id: 39, name: 'Selene Blay', keyframe: 20 },
    { id: 40, name: 'Helga Bodd', keyframe: 20 },
    { id: 41, name: 'Christoper Fuzzey', keyframe: 20 },
    { id: 42, name: 'Dell Bonick', keyframe: 20 },
    { id: 43, name: 'Laetitia Thrush', keyframe: 20 },
    { id: 44, name: 'Daven Daggett', keyframe: 20 },
    { id: 45, name: 'Gerry Iglesias', keyframe: 20 },
    { id: 46, name: 'Granny Gaymar', keyframe: 20 },
    { id: 47, name: 'Dari Dundendale', keyframe: 20 },
    { id: 48, name: 'Joelynn Belone', keyframe: 20 },
    { id: 49, name: 'Jemie Gotecliffe', keyframe: 20 },
    { id: 50, name: 'Marylin McPartling', keyframe: 20 },
    { id: 51, name: 'Marci Deegin', keyframe: 20 },
    { id: 52, name: 'Lucita Hele', keyframe: 20 },
    { id: 53, name: 'Omar Tellenbroker', keyframe: 20 },
    { id: 54, name: 'Tiena Aizikov', keyframe: 20 },
    { id: 55, name: 'Eolande Churchward', keyframe: 20 },
    { id: 56, name: 'Eadie Bum', keyframe: 20 },
    { id: 57, name: 'Wylma Oertzen', keyframe: 20 },
    { id: 58, name: 'Pauletta Sainthill', keyframe: 20 },
    { id: 59, name: 'Salomo Moran', keyframe: 20 },
    { id: 60, name: 'Sisile Egle', keyframe: 20 },
    { id: 61, name: 'Jenny Roskell', keyframe: 20 },
    { id: 62, name: 'Lief Wagen', keyframe: 20 },
    { id: 63, name: 'Erhard Paydon', keyframe: 20 },
    { id: 64, name: 'Corilla Bendon', keyframe: 20 },
    { id: 65, name: 'Elle Collinwood', keyframe: 20 },
    { id: 66, name: 'Iggy Jelkes', keyframe: 20 },
    { id: 67, name: 'Roslyn Wigfall', keyframe: 20 },
    { id: 68, name: 'Birch Nesey', keyframe: 20 },
    { id: 69, name: 'Eve Esseby', keyframe: 20 },
    { id: 70, name: 'Tobie Jacop', keyframe: 20 },
    { id: 71, name: 'Verile Bachmann', keyframe: 20 },
    { id: 72, name: 'Dee Silberschatz', keyframe: 20 },
    { id: 73, name: 'Cairistiona Abrahams', keyframe: 20 },
    { id: 74, name: 'Edd Duran', keyframe: 20 },
    { id: 75, name: 'Francesco Fosberry', keyframe: 20 },
    { id: 76, name: 'Shellysheldon Sauniere', keyframe: 20 },
    { id: 77, name: 'Rory Preshous', keyframe: 20 },
    { id: 78, name: 'Darsey Algate', keyframe: 20 },
    { id: 79, name: 'Bryce Scanderet', keyframe: 20 },
    { id: 80, name: 'Truda Borgars', keyframe: 20 },
    { id: 81, name: 'Benita Chanders', keyframe: 20 },
    { id: 82, name: 'Ewan Briskey', keyframe: 20 },
    { id: 83, name: 'Mortie Eastham', keyframe: 20 },
    { id: 84, name: 'Harper Seaborn', keyframe: 20 },
    { id: 85, name: 'Julie Essam', keyframe: 20 },
    { id: 86, name: 'Kinsley Budge', keyframe: 20 },
    { id: 87, name: 'Hildegarde Attawell', keyframe: 20 },
    { id: 88, name: 'Dannel Quilligan', keyframe: 20 },
    { id: 89, name: 'Nicky Besnard', keyframe: 20 },
    { id: 90, name: 'Nil Braznell', keyframe: 20 },
    { id: 91, name: 'Caddric Buey', keyframe: 20 },
    { id: 92, name: 'Darleen Arnau', keyframe: 20 },
    { id: 93, name: 'Edin Silbermann', keyframe: 20 },
    { id: 94, name: 'Pooh Armitage', keyframe: 20 },
    { id: 95, name: 'Thelma Gurr', keyframe: 20 },
    { id: 96, name: 'Arliene Chessel', keyframe: 20 },
    { id: 97, name: 'Filmore Thaller', keyframe: 20 },
    { id: 98, name: 'Danit Prinn', keyframe: 20 },
    { id: 99, name: 'Ramona Worham', keyframe: 20 },
    { id: 100, name: 'Hermon Dunridge', keyframe: 20 },
    { id: 101, name: 'Babita Blankley', keyframe: 20 },
    { id: 102, name: 'Malanie Donnachie', keyframe: 20 },
    { id: 103, name: 'Janek Wawer', keyframe: 20 },
    { id: 104, name: 'Bambie Curragh', keyframe: 20 },
    { id: 105, name: 'Harmonia Yonnie', keyframe: 20 }];

/** @type {PrizeJSON[]} */
const jsonPrz = [
    { id: 1, attendID: 1, name: 'Alice', mailAddr: '123 Main St Anytown DE', keyframe: 2 },
    { id: 2, attendID: 2, name: 'Bobby', mailAddr: '456 2nd Ave Sometown AK', keyframe: 2 },
    { id: 3, attendID: 2, name: 'Cedric (Bobby\'s son)', mailAddr: '456 2nd Ave Sometown AK', keyframe: 2 },
    { id: 4, attendID: 3, name: 'camille', mailAddr: '987 Third Pl Another City MN', keyframe: 2 },
    { id: 5, attendID: 4, name: 'Davie', mailAddr: '555 Fourth Ct Fooville CA', keyframe: 3 },
    { id: 6, attendID: 5, name: 'Erin', mailAddr: '432 Rosa Parks Dr Barnone SD', keyframe: 4 },
    { id: 7, attendID: 5, name: 'Erin', mailAddr: '432 Rosa Parks Dr Barnone SD', keyframe: 1000 },
    { id: 8, attendID: 6, name: 'Fredek Matuschek', mailAddr: '017 Welch Point Louisville KY', keyframe: 20 },
    { id: 9, attendID: 7, name: 'Karine Hanney', mailAddr: '6708 Kings Trail Naples FL', keyframe: 20 },
    { id: 10, attendID: 8, name: 'Dunn Ancliffe', mailAddr: '486 Dapin Avenue Huntsville TX', keyframe: 20 },
    { id: 11, attendID: 9, name: 'Myranda Dongall', mailAddr: '6 Commercial Lane Houston TX', keyframe: 20 },
    { id: 12, attendID: 10, name: 'Missie Caitlin', mailAddr: '27932 Dapin Lane Charleston SC', keyframe: 20 },
    { id: 13, attendID: 11, name: 'Zelda Tharme', mailAddr: '5752 Summerview Plaza Omaha NE', keyframe: 20 },
    { id: 14, attendID: 12, name: 'Lowrance Szymanek', mailAddr: '61 Russell Plaza New York City NY', keyframe: 20 },
    { id: 15, attendID: 13, name: 'Adlai Bonnaire', mailAddr: '28 Columbus Street Temple TX', keyframe: 20 },
    { id: 16, attendID: 14, name: 'Joyous Berndtsson', mailAddr: '214 Oakridge Park Newark NJ', keyframe: 20 },
    { id: 17, attendID: 15, name: 'Hamlin Gallehawk', mailAddr: '96777 Susan Trail Phoenix AZ', keyframe: 20 },
    { id: 18, attendID: 16, name: 'Mathias Gouinlock', mailAddr: '476 Eagan Park Rockville MD', keyframe: 20 },
    { id: 19, attendID: 17, name: 'Augy Attridge', mailAddr: '36 Ohio Road Pasadena CA', keyframe: 20 },
    { id: 20, attendID: 18, name: 'Fawn Briscow', mailAddr: '88 Fordem Place Atlanta GA', keyframe: 20 },
    { id: 21, attendID: 19, name: 'Benn Carous', mailAddr: '888 Grasskamp Terrace Los Angeles CA', keyframe: 20 },
    { id: 22, attendID: 20, name: 'Joletta Riccardi', mailAddr: '39686 Johnson Way Ridgely MD', keyframe: 20 },
    { id: 23, attendID: 21, name: 'Shellysheldon Arnauduc', mailAddr: '95 Starling Terrace Denver CO', keyframe: 20 },
    { id: 24, attendID: 22, name: 'Jenni Ordish', mailAddr: '9161 Barby Lane Kingsport TN', keyframe: 20 },
    { id: 25, attendID: 23, name: 'Anna-maria Auchterlonie', mailAddr: '243 Pawling Crossing Utica NY', keyframe: 20 },
    { id: 26, attendID: 24, name: 'Ade Matveichev', mailAddr: '0 Fairfield Circle Saint Paul MN', keyframe: 20 },
    { id: 27, attendID: 25, name: 'Glad De Goey', mailAddr: '63 Roxbury Hill Saint Paul MN', keyframe: 20 },
    { id: 28, attendID: 26, name: 'Bevvy Barten', mailAddr: '20125 Longview Avenue Columbia SC', keyframe: 20 },
    { id: 29, attendID: 27, name: 'Shirley Dietz', mailAddr: '77 Shasta Lane Garland TX', keyframe: 20 },
    { id: 30, attendID: 28, name: 'Silvain Napolitano', mailAddr: '5 Oneill Lane Des Moines IA', keyframe: 20 },
    { id: 31, attendID: 29, name: 'Gerhardine Tome', mailAddr: '1088 Buell Road Washington DC', keyframe: 20 },
    { id: 32, attendID: 30, name: 'Eden Tembridge', mailAddr: '6 Roxbury Road El Paso TX', keyframe: 20 },
    { id: 33, attendID: 31, name: 'Marna Kornes', mailAddr: '63431 Shelley Avenue Las Vegas NV', keyframe: 20 },
    { id: 34, attendID: 32, name: 'Roberto Bly', mailAddr: '411 Myrtle Trail Midland TX', keyframe: 20 },
    { id: 35, attendID: 33, name: 'Dexter Winchurst', mailAddr: '00 Jay Alley Phoenix AZ', keyframe: 20 },
    { id: 36, attendID: 34, name: 'Fletch Elkington', mailAddr: '01725 Buhler Place Long Beach CA', keyframe: 20 },
    { id: 37, attendID: 35, name: 'Taddeusz Frostdick', mailAddr: '7 Cascade Center Indianapolis IN', keyframe: 20 },
    { id: 38, attendID: 36, name: 'Monah Mulvihill', mailAddr: '7 Jenna Trail Los Angeles CA', keyframe: 20 },
    { id: 39, attendID: 37, name: 'Herbie Coldridge', mailAddr: '837 Garrison Terrace El Paso TX', keyframe: 20 },
    { id: 40, attendID: 38, name: 'Laura Riha', mailAddr: '98 Mendota Plaza Omaha NE', keyframe: 20 },
    { id: 41, attendID: 39, name: 'Selene Blay', mailAddr: '1228 Maple Wood Pass Hialeah FL', keyframe: 20 },
    { id: 42, attendID: 40, name: 'Helga Bodd', mailAddr: '45 Glacier Hill Parkway Panama City FL', keyframe: 20 },
    { id: 43, attendID: 41, name: 'Christoper Fuzzey', mailAddr: '07 Esch Parkway Tucson AZ', keyframe: 20 },
    { id: 44, attendID: 42, name: 'Dell Bonick', mailAddr: '21744 Transport Terrace Charlottesville VA', keyframe: 20 },
    { id: 45, attendID: 43, name: 'Laetitia Thrush', mailAddr: '23461 Kinsman Drive Buffalo NY', keyframe: 20 },
    { id: 46, attendID: 44, name: 'Daven Daggett', mailAddr: '734 Stuart Court New York City NY', keyframe: 20 },
    { id: 47, attendID: 45, name: 'Gerry Iglesias', mailAddr: '30 Del Sol Avenue Tacoma WA', keyframe: 20 },
    { id: 48, attendID: 46, name: 'Granny Gaymar', mailAddr: '033 Bowman Trail Glendale AZ', keyframe: 20 },
    { id: 49, attendID: 47, name: 'Dari Dundendale', mailAddr: '76655 Coolidge Center Hollywood FL', keyframe: 20 },
    { id: 50, attendID: 48, name: 'Joelynn Belone', mailAddr: '85083 Di Loreto Hill Charlotte NC', keyframe: 20 },
    { id: 51, attendID: 49, name: 'Jemie Gotecliffe', mailAddr: '80 Pennsylvania Lane Lafayette LA', keyframe: 20 },
    { id: 52, attendID: 50, name: 'Marylin McPartling', mailAddr: '04301 Shopko Drive Oklahoma City OK', keyframe: 20 },
    { id: 53, attendID: 51, name: 'Marci Deegin', mailAddr: '1 Waxwing Place San Jose CA', keyframe: 20 },
    { id: 54, attendID: 52, name: 'Lucita Hele', mailAddr: '306 Iowa Point Washington DC', keyframe: 20 },
    { id: 55, attendID: 53, name: 'Omar Tellenbroker', mailAddr: '58 Farmco Trail Tampa FL', keyframe: 20 },
    { id: 56, attendID: 54, name: 'Tiena Aizikov', mailAddr: '005 Rigney Crossing Pittsburgh PA', keyframe: 20 },
    { id: 57, attendID: 55, name: 'Eolande Churchward', mailAddr: '68 Quincy Court San Francisco CA', keyframe: 20 },
    { id: 58, attendID: 56, name: 'Eadie Bum', mailAddr: '40 Service Point Cincinnati OH', keyframe: 20 },
    { id: 59, attendID: 57, name: 'Wylma Oertzen', mailAddr: '37500 Namekagon Street Fort Lauderdale FL', keyframe: 20 },
    { id: 60, attendID: 58, name: 'Pauletta Sainthill', mailAddr: '99 Marcy Way Pittsburgh PA', keyframe: 20 },
    { id: 61, attendID: 59, name: 'Salomo Moran', mailAddr: '2 Chinook Place Fort Collins CO', keyframe: 20 },
    { id: 62, attendID: 60, name: 'Sisile Egle', mailAddr: '021 Anhalt Park Duluth GA', keyframe: 20 },
    { id: 63, attendID: 61, name: 'Jenny Roskell', mailAddr: '185 Hazelcrest Place Dallas TX', keyframe: 20 },
    { id: 64, attendID: 62, name: 'Lief Wagen', mailAddr: '81767 Cardinal Alley Saginaw MI', keyframe: 20 },
    { id: 65, attendID: 63, name: 'Erhard Paydon', mailAddr: '7119 Randy Junction San Diego CA', keyframe: 20 },
    { id: 66, attendID: 64, name: 'Corilla Bendon', mailAddr: '807 Browning Parkway Toledo OH', keyframe: 20 },
    { id: 67, attendID: 65, name: 'Elle Collinwood', mailAddr: '62 Jenna Plaza San Diego CA', keyframe: 20 },
    { id: 68, attendID: 66, name: 'Iggy Jelkes', mailAddr: '60297 Linden Pass El Paso TX', keyframe: 20 },
    { id: 69, attendID: 67, name: 'Roslyn Wigfall', mailAddr: '8977 Pawling Place Lexington KY', keyframe: 20 },
    { id: 70, attendID: 68, name: 'Birch Nesey', mailAddr: '026 Acker Pass Philadelphia PA', keyframe: 20 },
    { id: 71, attendID: 69, name: 'Eve Esseby', mailAddr: '321 Express Center White Plains NY', keyframe: 20 },
    { id: 72, attendID: 70, name: 'Tobie Jacop', mailAddr: '88 Macpherson Circle Albuquerque NM', keyframe: 20 },
    { id: 73, attendID: 71, name: 'Verile Bachmann', mailAddr: '88 Cottonwood Center Omaha NE', keyframe: 20 },
    { id: 74, attendID: 72, name: 'Dee Silberschatz', mailAddr: '6 Buhler Avenue Midland TX', keyframe: 20 },
    { id: 75, attendID: 73, name: 'Cairistiona Abrahams', mailAddr: '6766 Ramsey Drive Spokane WA', keyframe: 20 },
    { id: 76, attendID: 74, name: 'Edd Duran', mailAddr: '6 Independence Center Springfield IL', keyframe: 20 },
    { id: 77, attendID: 75, name: 'Francesco Fosberry', mailAddr: '4 Eastwood Lane Bakersfield CA', keyframe: 20 },
    { id: 78, attendID: 76, name: 'Shellysheldon Sauniere', mailAddr: '26812 Oak Valley Plaza Austin TX', keyframe: 20 },
    { id: 79, attendID: 77, name: 'Rory Preshous', mailAddr: '0714 Steensland Park Salt Lake City UT', keyframe: 20 },
    { id: 80, attendID: 78, name: 'Darsey Algate', mailAddr: '39948 Marquette Circle Indianapolis IN', keyframe: 20 },
    { id: 81, attendID: 79, name: 'Bryce Scanderet', mailAddr: '52 Prairieview Plaza Sacramento CA', keyframe: 20 },
    { id: 82, attendID: 80, name: 'Truda Borgars', mailAddr: '839 Anthes Circle Tyler TX', keyframe: 20 },
    { id: 83, attendID: 81, name: 'Benita Chanders', mailAddr: '554 Arrowood Point Spokane WA', keyframe: 20 },
    { id: 84, attendID: 82, name: 'Ewan Briskey', mailAddr: '0917 Duke Junction New Bedford MA', keyframe: 20 },
    { id: 85, attendID: 83, name: 'Mortie Eastham', mailAddr: '9 Carberry Crossing White Plains NY', keyframe: 20 },
    { id: 86, attendID: 84, name: 'Harper Seaborn', mailAddr: '889 Milwaukee Crossing Denver CO', keyframe: 20 },
    { id: 87, attendID: 85, name: 'Julie Essam', mailAddr: '37685 Ohio Parkway San Diego CA', keyframe: 20 },
    { id: 88, attendID: 86, name: 'Kinsley Budge', mailAddr: '2007 Oak Circle Lexington KY', keyframe: 20 },
    { id: 89, attendID: 87, name: 'Hildegarde Attawell', mailAddr: '8 Alpine Drive Greensboro NC', keyframe: 20 },
    { id: 90, attendID: 88, name: 'Dannel Quilligan', mailAddr: '704 Village Green Point Tulsa OK', keyframe: 20 },
    { id: 91, attendID: 89, name: 'Nicky Besnard', mailAddr: '169 Stoughton Parkway Jackson MS', keyframe: 20 },
    { id: 92, attendID: 90, name: 'Nil Braznell', mailAddr: '67 Dahle Court Salt Lake City UT', keyframe: 20 },
    { id: 93, attendID: 91, name: 'Caddric Buey', mailAddr: '1 Blaine Pass Birmingham AL', keyframe: 20 },
    { id: 94, attendID: 92, name: 'Darleen Arnau', mailAddr: '45 Brickson Park Center Baltimore MD', keyframe: 20 },
    { id: 95, attendID: 93, name: 'Edin Silbermann', mailAddr: '595 Pearson Trail Shreveport LA', keyframe: 20 },
    { id: 96, attendID: 94, name: 'Pooh Armitage', mailAddr: '68 Burning Wood Terrace North Little Rock AR', keyframe: 20 },
    { id: 97, attendID: 95, name: 'Thelma Gurr', mailAddr: '7 Homewood Center Bonita Springs FL', keyframe: 20 },
    { id: 98, attendID: 96, name: 'Arliene Chessel', mailAddr: '2 Almo Lane Brooklyn NY', keyframe: 20 },
    { id: 99, attendID: 97, name: 'Filmore Thaller', mailAddr: '466 Kedzie Park San Antonio TX', keyframe: 20 },
    { id: 100, attendID: 98, name: 'Danit Prinn', mailAddr: '0 Heath Way Jackson MS', keyframe: 20 },
    { id: 101, attendID: 99, name: 'Ramona Worham', mailAddr: '99 Coleman Street Louisville KY', keyframe: 20 },
    { id: 102, attendID: 100, name: 'Hermon Dunridge', mailAddr: '1553 Armistice Pass Houston TX', keyframe: 20 },
    { id: 103, attendID: 101, name: 'Babita Blankley', mailAddr: '258 Carey Pass Huntsville AL', keyframe: 20 },
    { id: 104, attendID: 102, name: 'Malanie Donnachie', mailAddr: '1 Bartillon Plaza Anchorage AK', keyframe: 20 },
    { id: 105, attendID: 103, name: 'Janek Wawer', mailAddr: '18339 Fordem Alley Virginia Beach VA', keyframe: 20 },
    { id: 106, attendID: 104, name: 'Bambie Curragh', mailAddr: '1118 Kings Trail Chicago IL', keyframe: 20 },
    { id: 107, attendID: 105, name: 'Harmonia Yonnie', mailAddr: '349 Memorial Street Greensboro NC', keyframe: 20 },
    { id: 108, attendID: 55, name: 'Eolande Churchward', mailAddr: '68 Quincy Court San Francisco CA', keyframe: 20 },
];

let keyOptions = jsonKF
    .sort((a, b) => a.key - b.key)
    .map((kf) => ({
        label: kf.desc, value: kf.key,
    }));
keyOptions = [
    {
        label: 'Reset', value: 0,
    }, ...keyOptions,
];

const setKey = await input.buttonsAsync('Select the key frame', keyOptions);

/** B mimics Attendee */
const tblB = base.getTable('B');
const fldB_ID = tblB.getField('ID');
const fldB_Name = tblB.getField('Name');

let allB = await tblB.selectRecordsAsync({ fields: [fldB_ID] });

/**
 * Map the record's RECORD_ID to its primary (numbered) ID.
 * @type {{ [id: number]:  string }}
 */
let tblB_IDtoID = {};
/** @type {number[]} */
let tblB_PrimaryIDs = [];

for (const record of allB.records) {
    const recID = record.id;
    const numberedID = record.getCellValue(fldB_ID);
    tblB_IDtoID[numberedID
    ] = recID;
    tblB_PrimaryIDs.push(numberedID);
}

const deletesB = jsonAtd
    // Delete everything after setKey...
    .filter((atd) => atd.keyframe > setKey)
    // ...that already exists in the table
    .filter((atd) => tblB_PrimaryIDs.includes(atd.id))
    .map((atd) => tblB_IDtoID[atd.id
    ]);

const createsB = jsonAtd
    .sort((atdA, atdB) => atdA.id - atdB.id)
    // Create everything up to setKey...
    .filter((atd) => atd.keyframe <= setKey)
    // ...minus anything that already exists
    .filter((atd) => !tblB_PrimaryIDs.includes(atd.id))
    .map((atd) => (
        {
            fields: {
                [fldB_ID.id]: atd.id,
                [fldB_Name.id]: atd.name,
            },
        }
    ));

/** A mimics Prize */
const tblA = base.getTable('A');
const fldA_ID = tblA.getField('ID');
const fldA_Atd = tblA.getField('Attendee');
const fldA_Name = tblA.getField('Name');
const fldA_MailAddr = tblA.getField('Mail_addr');

const allA = await tblA.selectRecordsAsync({ fields: [fldA_ID] });

const batch = 50;

// Modify B (the parent) first
let offset = 0;
while (offset < deletesB.length) {
    await tblB.deleteRecordsAsync(deletesB.slice(offset, offset + batch));
    offset += batch;
}

offset = 0;
while (offset < createsB.length) {
    await tblB.createRecordsAsync(createsB.slice(offset, offset + batch));
    offset += batch;
}

// Recompute B
allB = await tblB.selectRecordsAsync({
    fields: [fldB_ID],
});

tblB_IDtoID = {};
tblB_PrimaryIDs = [];

for (const record of allB.records) {
    const recID = record.id;
    const numberedID = record.getCellValue(fldB_ID);
    tblB_IDtoID[numberedID
    ] = recID;
    tblB_PrimaryIDs.push(numberedID);
}

/**
 * Map the record's RECORD_ID to its primary (numbered) ID.
 * @type {{ [id: number]:  string }}
 */
const tblA_IDtoID = {};
/** @type {number[]} */
const tblA_PrimaryIDs = [];

for (const record of allA.records) {
    const recID = record.id;
    const numberedID = record.getCellValue(fldA_ID);
    tblA_IDtoID[numberedID
    ] = recID;
    tblA_PrimaryIDs.push(numberedID);
}

const deletesA = jsonPrz
    // Delete everything after setKey...
    .filter((prz) => prz.keyframe > setKey)
    // ...that already exists in the table
    .filter((atd) => tblA_PrimaryIDs.includes(atd.id))
    .map((prz) => tblA_IDtoID[prz.id
    ]);

const createsA = jsonPrz
    .sort((przA, przB) => przA.id - przB.id)
    // Create everything up to setKey...
    .filter((prz) => prz.keyframe <= setKey)
    // ...minus anything that already exists
    .filter((prz) => !tblA_PrimaryIDs.includes(prz.id))
    .map((prz) => {
        const tblBRecID = tblB_IDtoID[prz.attendID
        ];
        return {
            fields: {
                [fldA_ID.id]: prz.id,
                [fldA_Name.id]: prz.name,
                [fldA_MailAddr.id]: prz.mailAddr,
                [fldA_Atd.id]: [{ id: tblBRecID }],
            },
        };
    });

// Modify A (the child) after
offset = 0;
while (offset < deletesA.length) {
    await tblA.deleteRecordsAsync(deletesA.slice(offset, offset + batch));
    offset += batch;
}

offset = 0;
while (offset < createsA.length) {
    await tblA.createRecordsAsync(createsA.slice(offset, offset + batch));
    offset += batch;
}
