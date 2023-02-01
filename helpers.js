// const DISPLAY_COUNT = 10;
const DISPLAY_COUNT = 10;
const OPPONENTS_COUNT = 100;
const DATES_COUNT = 10 + 1;
const TRANSITION_VALUES_COUNT = 50;
const SMOOTHING_FACTOR = 25;

const DEFAULT_CHART_UPDATE_DELAY = 2000;
let chartUpdateDelay = DEFAULT_CHART_UPDATE_DELAY;
const colorAnimationDuration = () => chartUpdateDelay / 2;
const yScaleAnimationDuration = () => chartUpdateDelay;
const xScaleAnimationDuration = () => chartUpdateDelay;

const IMAGE_URL =
  "https://img.freepik.com/free-icon/soccer-player_318-174100.jpg";

const IS_TOUCH_DEVICE = "ontouchstart" in window;

// let canApplyTransitionsOfXAxis = false;

// setTimeout(() => (canApplyTransitionsOfXAxis = true), 500);

const RANDOM_NAMES = [
  "Silas Wagner",
  "Jarred Walters",
  "Cleo Watts",
  "Josefa Costa",
  "Kasey Robertson",
  "Max Skinner",
  "Edgar Bright",
  "Shannon Roberts",
  "Jerald Carson",
  "Al Kline",
  "Lesley Peters",
  "Dallas Hill",
  "Jewel Flynn",
  "Margo Harrell",
  "Silvia Alvarado",
  "Eve Burch",
  "Christoper Wong",
  "Emma Farrell",
  "Tomas Newman",
  "Raymundo Barnett",
  "Rocco Kim",
  "Jayson Barber",
  "Lessie Lowery",
  "Stacie Stafford",
  "Garth Vasquez",
  "Nickolas Matthews",
  "Rosario Gilmore",
  "Jillian Hicks",
  "Gail Santana",
  "Omar Boyd",
  "Veronica Riddle",
  "Tabitha Weaver",
  "Mattie Spence",
  "Nelson Ballard",
  "Josephine Mccarty",
  "Bert Calderon",
  "Rowena Patterson",
  "Francisca Wilkerson",
  "Marva Baldwin",
  "Myra Espinoza",
  "Heriberto Padilla",
  "Felton Bass",
  "Effie Combs",
  "Leonor Campos",
  "Irma Middleton",
  "Clark Wall",
  "Dorothy Harrison",
  "Palmer Jarvis",
  "Antwan Ball",
  "Ervin Aguirre",
  "Otto Robles",
  "Trent Moreno",
  "Francisco Carney",
  "Delores Abbott",
  "Wayne Turner",
  "Hillary Powell",
  "Vicki Crawford",
  "Vance Avery",
  "Darell Gibson",
  "Shauna Rodriguez",
  "Melissa Thornton",
  "Ronda Bowers",
  "Tobias Lloyd",
  "Jane Villanueva",
  "Joel Parks",
  "Jolene Jackson",
  "Marcellus Berry",
  "Foster Buck",
  "Brandie Hawkins",
  "Darrell Erickson",
  "Millicent Ho",
  "Thaddeus Simmons",
  "Carson Dalton",
  "Christian Flores",
  "Bert Mooney",
  "Micheal House",
  "Lindsey Novak",
  "Murray Pope",
  "Wilbert Rojas",
  "Helen Stein",
  "Josefina Chambers",
  "Kari Decker",
  "Estelle Ewing",
  "Cliff Pugh",
  "Korey Mcfarland",
  "Elsie York",
  "Alice Cooper",
  "Mattie Hobbs",
  "Lilian Zuniga",
  "Amos Duffy",
  "Ronny Munoz",
  "Leo Oconnor",
  "Curt Rowe",
  "Sharron Cruz",
  "Thurman Harrington",
  "Cary Richmond",
  "Jerry Stephenson",
  "Margery Hunt",
  "Rebekah Rivas",
  "Beverley Austin",
  "Silas Wagner",
  "Jarred Walters",
  "Cleo Watts",
  "Josefa Costa",
  "Kasey Robertson",
  "Max Skinner",
  "Edgar Bright",
  "Shannon Roberts",
  "Jerald Carson",
  "Al Kline",
  "Lesley Peters",
  "Dallas Hill",
  "Jewel Flynn",
  "Margo Harrell",
  "Silvia Alvarado",
  "Eve Burch",
  "Christoper Wong",
  "Emma Farrell",
  "Tomas Newman",
  "Raymundo Barnett",
  "Rocco Kim",
  "Jayson Barber",
  "Lessie Lowery",
  "Stacie Stafford",
  "Garth Vasquez",
  "Nickolas Matthews",
  "Rosario Gilmore",
  "Jillian Hicks",
  "Gail Santana",
  "Omar Boyd",
  "Veronica Riddle",
  "Tabitha Weaver",
  "Mattie Spence",
  "Nelson Ballard",
  "Josephine Mccarty",
  "Bert Calderon",
  "Rowena Patterson",
  "Francisca Wilkerson",
  "Marva Baldwin",
  "Myra Espinoza",
  "Heriberto Padilla",
  "Felton Bass",
  "Effie Combs",
  "Leonor Campos",
  "Irma Middleton",
  "Clark Wall",
  "Dorothy Harrison",
  "Palmer Jarvis",
  "Antwan Ball",
  "Ervin Aguirre",
  "Otto Robles",
  "Trent Moreno",
  "Francisco Carney",
  "Delores Abbott",
  "Wayne Turner",
  "Hillary Powell",
  "Vicki Crawford",
  "Vance Avery",
  "Darell Gibson",
  "Shauna Rodriguez",
  "Melissa Thornton",
  "Ronda Bowers",
  "Tobias Lloyd",
  "Jane Villanueva",
  "Joel Parks",
  "Jolene Jackson",
  "Marcellus Berry",
  "Foster Buck",
  "Brandie Hawkins",
  "Darrell Erickson",
  "Millicent Ho",
  "Thaddeus Simmons",
  "Carson Dalton",
  "Christian Flores",
  "Bert Mooney",
  "Micheal House",
  "Lindsey Novak",
  "Murray Pope",
  "Wilbert Rojas",
  "Helen Stein",
  "Josefina Chambers",
  "Kari Decker",
  "Estelle Ewing",
  "Cliff Pugh",
  "Korey Mcfarland",
  "Elsie York",
  "Alice Cooper",
  "Mattie Hobbs",
  "Lilian Zuniga",
  "Amos Duffy",
  "Ronny Munoz",
  "Leo Oconnor",
  "Curt Rowe",
  "Sharron Cruz",
  "Thurman Harrington",
  "Cary Richmond",
  "Jerry Stephenson",
  "Margery Hunt",
  "Rebekah Rivas",
  "Beverley Austin",
  "Silas Wagner",
  "Jarred Walters",
  "Cleo Watts",
  "Josefa Costa",
  "Kasey Robertson",
  "Max Skinner",
  "Edgar Bright",
  "Shannon Roberts",
  "Jerald Carson",
  "Al Kline",
  "Lesley Peters",
  "Dallas Hill",
  "Jewel Flynn",
  "Margo Harrell",
  "Silvia Alvarado",
  "Eve Burch",
  "Christoper Wong",
  "Emma Farrell",
  "Tomas Newman",
  "Raymundo Barnett",
  "Rocco Kim",
  "Jayson Barber",
  "Lessie Lowery",
  "Stacie Stafford",
  "Garth Vasquez",
  "Nickolas Matthews",
  "Rosario Gilmore",
  "Jillian Hicks",
  "Gail Santana",
  "Omar Boyd",
  "Veronica Riddle",
  "Tabitha Weaver",
  "Mattie Spence",
  "Nelson Ballard",
  "Josephine Mccarty",
  "Bert Calderon",
  "Rowena Patterson",
  "Francisca Wilkerson",
  "Marva Baldwin",
  "Myra Espinoza",
  "Heriberto Padilla",
  "Felton Bass",
  "Effie Combs",
  "Leonor Campos",
  "Irma Middleton",
  "Clark Wall",
  "Dorothy Harrison",
  "Palmer Jarvis",
  "Antwan Ball",
  "Ervin Aguirre",
  "Otto Robles",
  "Trent Moreno",
  "Francisco Carney",
  "Delores Abbott",
  "Wayne Turner",
  "Hillary Powell",
  "Vicki Crawford",
  "Vance Avery",
  "Darell Gibson",
  "Shauna Rodriguez",
  "Melissa Thornton",
  "Ronda Bowers",
  "Tobias Lloyd",
  "Jane Villanueva",
  "Joel Parks",
  "Jolene Jackson",
  "Marcellus Berry",
  "Foster Buck",
  "Brandie Hawkins",
  "Darrell Erickson",
  "Millicent Ho",
  "Thaddeus Simmons",
  "Carson Dalton",
  "Christian Flores",
  "Bert Mooney",
  "Micheal House",
  "Lindsey Novak",
  "Murray Pope",
  "Wilbert Rojas",
  "Helen Stein",
  "Josefina Chambers",
  "Kari Decker",
  "Estelle Ewing",
  "Cliff Pugh",
  "Korey Mcfarland",
  "Elsie York",
  "Alice Cooper",
  "Mattie Hobbs",
  "Lilian Zuniga",
  "Amos Duffy",
  "Ronny Munoz",
  "Leo Oconnor",
  "Curt Rowe",
  "Sharron Cruz",
  "Thurman Harrington",
  "Cary Richmond",
  "Jerry Stephenson",
  "Margery Hunt",
  "Rebekah Rivas",
  "Beverley Austin",
  "Silas Wagner",
  "Jarred Walters",
  "Cleo Watts",
  "Josefa Costa",
  "Kasey Robertson",
  "Max Skinner",
  "Edgar Bright",
  "Shannon Roberts",
  "Jerald Carson",
  "Al Kline",
  "Lesley Peters",
  "Dallas Hill",
  "Jewel Flynn",
  "Margo Harrell",
  "Silvia Alvarado",
  "Eve Burch",
  "Christoper Wong",
  "Emma Farrell",
  "Tomas Newman",
  "Raymundo Barnett",
  "Rocco Kim",
  "Jayson Barber",
  "Lessie Lowery",
  "Stacie Stafford",
  "Garth Vasquez",
  "Nickolas Matthews",
  "Rosario Gilmore",
  "Jillian Hicks",
  "Gail Santana",
  "Omar Boyd",
  "Veronica Riddle",
  "Tabitha Weaver",
  "Mattie Spence",
  "Nelson Ballard",
  "Josephine Mccarty",
  "Bert Calderon",
  "Rowena Patterson",
  "Francisca Wilkerson",
  "Marva Baldwin",
  "Myra Espinoza",
  "Heriberto Padilla",
  "Felton Bass",
  "Effie Combs",
  "Leonor Campos",
  "Irma Middleton",
  "Clark Wall",
  "Dorothy Harrison",
  "Palmer Jarvis",
  "Antwan Ball",
  "Ervin Aguirre",
  "Otto Robles",
  "Trent Moreno",
  "Francisco Carney",
  "Delores Abbott",
  "Wayne Turner",
  "Hillary Powell",
  "Vicki Crawford",
  "Vance Avery",
  "Darell Gibson",
  "Shauna Rodriguez",
  "Melissa Thornton",
  "Ronda Bowers",
  "Tobias Lloyd",
  "Jane Villanueva",
  "Joel Parks",
  "Jolene Jackson",
  "Marcellus Berry",
  "Foster Buck",
  "Brandie Hawkins",
  "Darrell Erickson",
  "Millicent Ho",
  "Thaddeus Simmons",
  "Carson Dalton",
  "Christian Flores",
  "Bert Mooney",
  "Micheal House",
  "Lindsey Novak",
  "Murray Pope",
  "Wilbert Rojas",
  "Helen Stein",
  "Josefina Chambers",
  "Kari Decker",
  "Estelle Ewing",
  "Cliff Pugh",
  "Korey Mcfarland",
  "Elsie York",
  "Alice Cooper",
  "Mattie Hobbs",
  "Lilian Zuniga",
  "Amos Duffy",
  "Ronny Munoz",
  "Leo Oconnor",
  "Curt Rowe",
  "Sharron Cruz",
  "Thurman Harrington",
  "Cary Richmond",
  "Jerry Stephenson",
  "Margery Hunt",
  "Rebekah Rivas",
  "Beverley Austin",
  "Silas Wagner",
  "Jarred Walters",
  "Cleo Watts",
  "Josefa Costa",
  "Kasey Robertson",
  "Max Skinner",
  "Edgar Bright",
  "Shannon Roberts",
  "Jerald Carson",
  "Al Kline",
  "Lesley Peters",
  "Dallas Hill",
  "Jewel Flynn",
  "Margo Harrell",
  "Silvia Alvarado",
  "Eve Burch",
  "Christoper Wong",
  "Emma Farrell",
  "Tomas Newman",
  "Raymundo Barnett",
  "Rocco Kim",
  "Jayson Barber",
  "Lessie Lowery",
  "Stacie Stafford",
  "Garth Vasquez",
  "Nickolas Matthews",
  "Rosario Gilmore",
  "Jillian Hicks",
  "Gail Santana",
  "Omar Boyd",
  "Veronica Riddle",
  "Tabitha Weaver",
  "Mattie Spence",
  "Nelson Ballard",
  "Josephine Mccarty",
  "Bert Calderon",
  "Rowena Patterson",
  "Francisca Wilkerson",
  "Marva Baldwin",
  "Myra Espinoza",
  "Heriberto Padilla",
  "Felton Bass",
  "Effie Combs",
  "Leonor Campos",
  "Irma Middleton",
  "Clark Wall",
  "Dorothy Harrison",
  "Palmer Jarvis",
  "Antwan Ball",
  "Ervin Aguirre",
  "Otto Robles",
  "Trent Moreno",
  "Francisco Carney",
  "Delores Abbott",
  "Wayne Turner",
  "Hillary Powell",
  "Vicki Crawford",
  "Vance Avery",
  "Darell Gibson",
  "Shauna Rodriguez",
  "Melissa Thornton",
  "Ronda Bowers",
  "Tobias Lloyd",
  "Jane Villanueva",
  "Joel Parks",
  "Jolene Jackson",
  "Marcellus Berry",
  "Foster Buck",
  "Brandie Hawkins",
  "Darrell Erickson",
  "Millicent Ho",
  "Thaddeus Simmons",
  "Carson Dalton",
  "Christian Flores",
  "Bert Mooney",
  "Micheal House",
  "Lindsey Novak",
  "Murray Pope",
  "Wilbert Rojas",
  "Helen Stein",
  "Josefina Chambers",
  "Kari Decker",
  "Estelle Ewing",
  "Cliff Pugh",
  "Korey Mcfarland",
  "Elsie York",
  "Alice Cooper",
  "Mattie Hobbs",
  "Lilian Zuniga",
  "Amos Duffy",
  "Ronny Munoz",
  "Leo Oconnor",
  "Curt Rowe",
  "Sharron Cruz",
  "Thurman Harrington",
  "Cary Richmond",
  "Jerry Stephenson",
  "Margery Hunt",
  "Rebekah Rivas",
  "Beverley Austin",
  "Silas Wagner",
  "Jarred Walters",
  "Cleo Watts",
  "Josefa Costa",
  "Kasey Robertson",
  "Max Skinner",
  "Edgar Bright",
  "Shannon Roberts",
  "Jerald Carson",
  "Al Kline",
  "Lesley Peters",
  "Dallas Hill",
  "Jewel Flynn",
  "Margo Harrell",
  "Silvia Alvarado",
  "Eve Burch",
  "Christoper Wong",
  "Emma Farrell",
  "Tomas Newman",
  "Raymundo Barnett",
  "Rocco Kim",
  "Jayson Barber",
  "Lessie Lowery",
  "Stacie Stafford",
  "Garth Vasquez",
  "Nickolas Matthews",
  "Rosario Gilmore",
  "Jillian Hicks",
  "Gail Santana",
  "Omar Boyd",
  "Veronica Riddle",
  "Tabitha Weaver",
  "Mattie Spence",
  "Nelson Ballard",
  "Josephine Mccarty",
  "Bert Calderon",
  "Rowena Patterson",
  "Francisca Wilkerson",
  "Marva Baldwin",
  "Myra Espinoza",
  "Heriberto Padilla",
  "Felton Bass",
  "Effie Combs",
  "Leonor Campos",
  "Irma Middleton",
  "Clark Wall",
  "Dorothy Harrison",
  "Palmer Jarvis",
  "Antwan Ball",
  "Ervin Aguirre",
  "Otto Robles",
  "Trent Moreno",
  "Francisco Carney",
  "Delores Abbott",
  "Wayne Turner",
  "Hillary Powell",
  "Vicki Crawford",
  "Vance Avery",
  "Darell Gibson",
  "Shauna Rodriguez",
  "Melissa Thornton",
  "Ronda Bowers",
  "Tobias Lloyd",
  "Jane Villanueva",
  "Joel Parks",
  "Jolene Jackson",
  "Marcellus Berry",
  "Foster Buck",
  "Brandie Hawkins",
  "Darrell Erickson",
  "Millicent Ho",
  "Thaddeus Simmons",
  "Carson Dalton",
  "Christian Flores",
  "Bert Mooney",
  "Micheal House",
  "Lindsey Novak",
  "Murray Pope",
  "Wilbert Rojas",
  "Helen Stein",
  "Josefina Chambers",
  "Kari Decker",
  "Estelle Ewing",
  "Cliff Pugh",
  "Korey Mcfarland",
  "Elsie York",
  "Alice Cooper",
  "Mattie Hobbs",
  "Lilian Zuniga",
  "Amos Duffy",
  "Ronny Munoz",
  "Leo Oconnor",
  "Curt Rowe",
  "Sharron Cruz",
  "Thurman Harrington",
  "Cary Richmond",
  "Jerry Stephenson",
  "Margery Hunt",
  "Rebekah Rivas",
  "Beverley Austin",
  "Silas Wagner",
  "Jarred Walters",
  "Cleo Watts",
  "Josefa Costa",
  "Kasey Robertson",
  "Max Skinner",
  "Edgar Bright",
  "Shannon Roberts",
  "Jerald Carson",
  "Al Kline",
  "Lesley Peters",
  "Dallas Hill",
  "Jewel Flynn",
  "Margo Harrell",
  "Silvia Alvarado",
  "Eve Burch",
  "Christoper Wong",
  "Emma Farrell",
  "Tomas Newman",
  "Raymundo Barnett",
  "Rocco Kim",
  "Jayson Barber",
  "Lessie Lowery",
  "Stacie Stafford",
  "Garth Vasquez",
  "Nickolas Matthews",
  "Rosario Gilmore",
  "Jillian Hicks",
  "Gail Santana",
  "Omar Boyd",
  "Veronica Riddle",
  "Tabitha Weaver",
  "Mattie Spence",
  "Nelson Ballard",
  "Josephine Mccarty",
  "Bert Calderon",
  "Rowena Patterson",
  "Francisca Wilkerson",
  "Marva Baldwin",
  "Myra Espinoza",
  "Heriberto Padilla",
  "Felton Bass",
  "Effie Combs",
  "Leonor Campos",
  "Irma Middleton",
  "Clark Wall",
  "Dorothy Harrison",
  "Palmer Jarvis",
  "Antwan Ball",
  "Ervin Aguirre",
  "Otto Robles",
  "Trent Moreno",
  "Francisco Carney",
  "Delores Abbott",
  "Wayne Turner",
  "Hillary Powell",
  "Vicki Crawford",
  "Vance Avery",
  "Darell Gibson",
  "Shauna Rodriguez",
  "Melissa Thornton",
  "Ronda Bowers",
  "Tobias Lloyd",
  "Jane Villanueva",
  "Joel Parks",
  "Jolene Jackson",
  "Marcellus Berry",
  "Foster Buck",
  "Brandie Hawkins",
  "Darrell Erickson",
  "Millicent Ho",
  "Thaddeus Simmons",
  "Carson Dalton",
  "Christian Flores",
  "Bert Mooney",
  "Micheal House",
  "Lindsey Novak",
  "Murray Pope",
  "Wilbert Rojas",
  "Helen Stein",
  "Josefina Chambers",
  "Kari Decker",
  "Estelle Ewing",
  "Cliff Pugh",
  "Korey Mcfarland",
  "Elsie York",
  "Alice Cooper",
  "Mattie Hobbs",
  "Lilian Zuniga",
  "Amos Duffy",
  "Ronny Munoz",
  "Leo Oconnor",
  "Curt Rowe",
  "Sharron Cruz",
  "Thurman Harrington",
  "Cary Richmond",
  "Jerry Stephenson",
  "Margery Hunt",
  "Rebekah Rivas",
  "Beverley Austin",
  "Silas Wagner",
  "Jarred Walters",
  "Cleo Watts",
  "Josefa Costa",
  "Kasey Robertson",
  "Max Skinner",
  "Edgar Bright",
  "Shannon Roberts",
  "Jerald Carson",
  "Al Kline",
  "Lesley Peters",
  "Dallas Hill",
  "Jewel Flynn",
  "Margo Harrell",
  "Silvia Alvarado",
  "Eve Burch",
  "Christoper Wong",
  "Emma Farrell",
  "Tomas Newman",
  "Raymundo Barnett",
  "Rocco Kim",
  "Jayson Barber",
  "Lessie Lowery",
  "Stacie Stafford",
  "Garth Vasquez",
  "Nickolas Matthews",
  "Rosario Gilmore",
  "Jillian Hicks",
  "Gail Santana",
  "Omar Boyd",
  "Veronica Riddle",
  "Tabitha Weaver",
  "Mattie Spence",
  "Nelson Ballard",
  "Josephine Mccarty",
  "Bert Calderon",
  "Rowena Patterson",
  "Francisca Wilkerson",
  "Marva Baldwin",
  "Myra Espinoza",
  "Heriberto Padilla",
  "Felton Bass",
  "Effie Combs",
  "Leonor Campos",
  "Irma Middleton",
  "Clark Wall",
  "Dorothy Harrison",
  "Palmer Jarvis",
  "Antwan Ball",
  "Ervin Aguirre",
  "Otto Robles",
  "Trent Moreno",
  "Francisco Carney",
  "Delores Abbott",
  "Wayne Turner",
  "Hillary Powell",
  "Vicki Crawford",
  "Vance Avery",
  "Darell Gibson",
  "Shauna Rodriguez",
  "Melissa Thornton",
  "Ronda Bowers",
  "Tobias Lloyd",
  "Jane Villanueva",
  "Joel Parks",
  "Jolene Jackson",
  "Marcellus Berry",
  "Foster Buck",
  "Brandie Hawkins",
  "Darrell Erickson",
  "Millicent Ho",
  "Thaddeus Simmons",
  "Carson Dalton",
  "Christian Flores",
  "Bert Mooney",
  "Micheal House",
  "Lindsey Novak",
  "Murray Pope",
  "Wilbert Rojas",
  "Helen Stein",
  "Josefina Chambers",
  "Kari Decker",
  "Estelle Ewing",
  "Cliff Pugh",
  "Korey Mcfarland",
  "Elsie York",
  "Alice Cooper",
  "Mattie Hobbs",
  "Lilian Zuniga",
  "Amos Duffy",
  "Ronny Munoz",
  "Leo Oconnor",
  "Curt Rowe",
  "Sharron Cruz",
  "Thurman Harrington",
  "Cary Richmond",
  "Jerry Stephenson",
  "Margery Hunt",
  "Rebekah Rivas",
  "Beverley Austin",
  "Silas Wagner",
  "Jarred Walters",
  "Cleo Watts",
  "Josefa Costa",
  "Kasey Robertson",
  "Max Skinner",
  "Edgar Bright",
  "Shannon Roberts",
  "Jerald Carson",
  "Al Kline",
  "Lesley Peters",
  "Dallas Hill",
  "Jewel Flynn",
  "Margo Harrell",
  "Silvia Alvarado",
  "Eve Burch",
  "Christoper Wong",
  "Emma Farrell",
  "Tomas Newman",
  "Raymundo Barnett",
  "Rocco Kim",
  "Jayson Barber",
  "Lessie Lowery",
  "Stacie Stafford",
  "Garth Vasquez",
  "Nickolas Matthews",
  "Rosario Gilmore",
  "Jillian Hicks",
  "Gail Santana",
  "Omar Boyd",
  "Veronica Riddle",
  "Tabitha Weaver",
  "Mattie Spence",
  "Nelson Ballard",
  "Josephine Mccarty",
  "Bert Calderon",
  "Rowena Patterson",
  "Francisca Wilkerson",
  "Marva Baldwin",
  "Myra Espinoza",
  "Heriberto Padilla",
  "Felton Bass",
  "Effie Combs",
  "Leonor Campos",
  "Irma Middleton",
  "Clark Wall",
  "Dorothy Harrison",
  "Palmer Jarvis",
  "Antwan Ball",
  "Ervin Aguirre",
  "Otto Robles",
  "Trent Moreno",
  "Francisco Carney",
  "Delores Abbott",
  "Wayne Turner",
  "Hillary Powell",
  "Vicki Crawford",
  "Vance Avery",
  "Darell Gibson",
  "Shauna Rodriguez",
  "Melissa Thornton",
  "Ronda Bowers",
  "Tobias Lloyd",
  "Jane Villanueva",
  "Joel Parks",
  "Jolene Jackson",
  "Marcellus Berry",
  "Foster Buck",
  "Brandie Hawkins",
  "Darrell Erickson",
  "Millicent Ho",
  "Thaddeus Simmons",
  "Carson Dalton",
  "Christian Flores",
  "Bert Mooney",
  "Micheal House",
  "Lindsey Novak",
  "Murray Pope",
  "Wilbert Rojas",
  "Helen Stein",
  "Josefina Chambers",
  "Kari Decker",
  "Estelle Ewing",
  "Cliff Pugh",
  "Korey Mcfarland",
  "Elsie York",
  "Alice Cooper",
  "Mattie Hobbs",
  "Lilian Zuniga",
  "Amos Duffy",
  "Ronny Munoz",
  "Leo Oconnor",
  "Curt Rowe",
  "Sharron Cruz",
  "Thurman Harrington",
  "Cary Richmond",
  "Jerry Stephenson",
  "Margery Hunt",
  "Rebekah Rivas",
  "Beverley Austin",
  "Silas Wagner",
  "Jarred Walters",
  "Cleo Watts",
  "Josefa Costa",
  "Kasey Robertson",
  "Max Skinner",
  "Edgar Bright",
  "Shannon Roberts",
  "Jerald Carson",
  "Al Kline",
  "Lesley Peters",
  "Dallas Hill",
  "Jewel Flynn",
  "Margo Harrell",
  "Silvia Alvarado",
  "Eve Burch",
  "Christoper Wong",
  "Emma Farrell",
  "Tomas Newman",
  "Raymundo Barnett",
  "Rocco Kim",
  "Jayson Barber",
  "Lessie Lowery",
  "Stacie Stafford",
  "Garth Vasquez",
  "Nickolas Matthews",
  "Rosario Gilmore",
  "Jillian Hicks",
  "Gail Santana",
  "Omar Boyd",
  "Veronica Riddle",
  "Tabitha Weaver",
  "Mattie Spence",
  "Nelson Ballard",
  "Josephine Mccarty",
  "Bert Calderon",
  "Rowena Patterson",
  "Francisca Wilkerson",
  "Marva Baldwin",
  "Myra Espinoza",
  "Heriberto Padilla",
  "Felton Bass",
  "Effie Combs",
  "Leonor Campos",
  "Irma Middleton",
  "Clark Wall",
  "Dorothy Harrison",
  "Palmer Jarvis",
  "Antwan Ball",
  "Ervin Aguirre",
  "Otto Robles",
  "Trent Moreno",
  "Francisco Carney",
  "Delores Abbott",
  "Wayne Turner",
  "Hillary Powell",
  "Vicki Crawford",
  "Vance Avery",
  "Darell Gibson",
  "Shauna Rodriguez",
  "Melissa Thornton",
  "Ronda Bowers",
  "Tobias Lloyd",
  "Jane Villanueva",
  "Joel Parks",
  "Jolene Jackson",
  "Marcellus Berry",
  "Foster Buck",
  "Brandie Hawkins",
  "Darrell Erickson",
  "Millicent Ho",
  "Thaddeus Simmons",
  "Carson Dalton",
  "Christian Flores",
  "Bert Mooney",
  "Micheal House",
  "Lindsey Novak",
  "Murray Pope",
  "Wilbert Rojas",
  "Helen Stein",
  "Josefina Chambers",
  "Kari Decker",
  "Estelle Ewing",
  "Cliff Pugh",
  "Korey Mcfarland",
  "Elsie York",
  "Alice Cooper",
  "Mattie Hobbs",
  "Lilian Zuniga",
  "Amos Duffy",
  "Ronny Munoz",
  "Leo Oconnor",
  "Curt Rowe",
  "Sharron Cruz",
  "Thurman Harrington",
  "Cary Richmond",
  "Jerry Stephenson",
  "Margery Hunt",
  "Rebekah Rivas",
  "Beverley Austin",
  "Silas Wagner",
  "Jarred Walters",
  "Cleo Watts",
  "Josefa Costa",
  "Kasey Robertson",
  "Max Skinner",
  "Edgar Bright",
  "Shannon Roberts",
  "Jerald Carson",
  "Al Kline",
  "Lesley Peters",
  "Dallas Hill",
  "Jewel Flynn",
  "Margo Harrell",
  "Silvia Alvarado",
  "Eve Burch",
  "Christoper Wong",
  "Emma Farrell",
  "Tomas Newman",
  "Raymundo Barnett",
  "Rocco Kim",
  "Jayson Barber",
  "Lessie Lowery",
  "Stacie Stafford",
  "Garth Vasquez",
  "Nickolas Matthews",
  "Rosario Gilmore",
  "Jillian Hicks",
  "Gail Santana",
  "Omar Boyd",
  "Veronica Riddle",
  "Tabitha Weaver",
  "Mattie Spence",
  "Nelson Ballard",
  "Josephine Mccarty",
  "Bert Calderon",
  "Rowena Patterson",
  "Francisca Wilkerson",
  "Marva Baldwin",
  "Myra Espinoza",
  "Heriberto Padilla",
  "Felton Bass",
  "Effie Combs",
  "Leonor Campos",
  "Irma Middleton",
  "Clark Wall",
  "Dorothy Harrison",
  "Palmer Jarvis",
  "Antwan Ball",
  "Ervin Aguirre",
  "Otto Robles",
  "Trent Moreno",
  "Francisco Carney",
  "Delores Abbott",
  "Wayne Turner",
  "Hillary Powell",
  "Vicki Crawford",
  "Vance Avery",
  "Darell Gibson",
  "Shauna Rodriguez",
  "Melissa Thornton",
  "Ronda Bowers",
  "Tobias Lloyd",
  "Jane Villanueva",
  "Joel Parks",
  "Jolene Jackson",
  "Marcellus Berry",
  "Foster Buck",
  "Brandie Hawkins",
  "Darrell Erickson",
  "Millicent Ho",
  "Thaddeus Simmons",
  "Carson Dalton",
  "Christian Flores",
  "Bert Mooney",
  "Micheal House",
  "Lindsey Novak",
  "Murray Pope",
  "Wilbert Rojas",
  "Helen Stein",
  "Josefina Chambers",
  "Kari Decker",
  "Estelle Ewing",
  "Cliff Pugh",
  "Korey Mcfarland",
  "Elsie York",
  "Alice Cooper",
  "Mattie Hobbs",
  "Lilian Zuniga",
  "Amos Duffy",
  "Ronny Munoz",
  "Leo Oconnor",
  "Curt Rowe",
  "Sharron Cruz",
  "Thurman Harrington",
  "Cary Richmond",
  "Jerry Stephenson",
  "Margery Hunt",
  "Rebekah Rivas",
  "Beverley Austin",
  "Silas Wagner",
  "Jarred Walters",
  "Cleo Watts",
  "Josefa Costa",
  "Kasey Robertson",
  "Max Skinner",
  "Edgar Bright",
  "Shannon Roberts",
  "Jerald Carson",
  "Al Kline",
  "Lesley Peters",
  "Dallas Hill",
  "Jewel Flynn",
  "Margo Harrell",
  "Silvia Alvarado",
  "Eve Burch",
  "Christoper Wong",
  "Emma Farrell",
  "Tomas Newman",
  "Raymundo Barnett",
  "Rocco Kim",
  "Jayson Barber",
  "Lessie Lowery",
  "Stacie Stafford",
  "Garth Vasquez",
  "Nickolas Matthews",
  "Rosario Gilmore",
  "Jillian Hicks",
  "Gail Santana",
  "Omar Boyd",
  "Veronica Riddle",
  "Tabitha Weaver",
  "Mattie Spence",
  "Nelson Ballard",
  "Josephine Mccarty",
  "Bert Calderon",
  "Rowena Patterson",
  "Francisca Wilkerson",
  "Marva Baldwin",
  "Myra Espinoza",
  "Heriberto Padilla",
  "Felton Bass",
  "Effie Combs",
  "Leonor Campos",
  "Irma Middleton",
  "Clark Wall",
  "Dorothy Harrison",
  "Palmer Jarvis",
  "Antwan Ball",
  "Ervin Aguirre",
  "Otto Robles",
  "Trent Moreno",
  "Francisco Carney",
  "Delores Abbott",
  "Wayne Turner",
  "Hillary Powell",
  "Vicki Crawford",
  "Vance Avery",
  "Darell Gibson",
  "Shauna Rodriguez",
  "Melissa Thornton",
  "Ronda Bowers",
  "Tobias Lloyd",
  "Jane Villanueva",
  "Joel Parks",
  "Jolene Jackson",
  "Marcellus Berry",
  "Foster Buck",
  "Brandie Hawkins",
  "Darrell Erickson",
  "Millicent Ho",
  "Thaddeus Simmons",
  "Carson Dalton",
  "Christian Flores",
  "Bert Mooney",
  "Micheal House",
  "Lindsey Novak",
  "Murray Pope",
  "Wilbert Rojas",
  "Helen Stein",
  "Josefina Chambers",
  "Kari Decker",
  "Estelle Ewing",
  "Cliff Pugh",
  "Korey Mcfarland",
  "Elsie York",
  "Alice Cooper",
  "Mattie Hobbs",
  "Lilian Zuniga",
  "Amos Duffy",
  "Ronny Munoz",
  "Leo Oconnor",
  "Curt Rowe",
  "Sharron Cruz",
  "Thurman Harrington",
  "Cary Richmond",
  "Jerry Stephenson",
  "Margery Hunt",
  "Rebekah Rivas",
  "Beverley Austin",
]
  .map((name, i) => `${name} ${i}`)
  .slice(0, OPPONENTS_COUNT);

let aspectRatio = IS_TOUCH_DEVICE
  ? 1 / (DISPLAY_COUNT / 10)
  : DISPLAY_COUNT == 10
  ? 2
  : 1 / (DISPLAY_COUNT / 15);

function useSmoothRandom(factor, start) {
  let last = start !== undefined ? start : Math.random();
  const halfEnvelope = 1 / factor / 2;
  return function () {
    // clamp output range to [0,1] as Math.random()
    const max = Math.min(1, last + halfEnvelope);
    const min = Math.max(0.5, last - halfEnvelope);
    // return a number within halfRange of the last returned value
    return (last = Math.random() * (max - min) + min);
  };
}

function getDates() {
  return Array.from({ length: DATES_COUNT }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - i);
    return date;
  }).sort((a, b) => a - b);
}

const _dates = getDates();

let minimumValue = null;
let maximumValue = null;

function getValuesByName() {
  const valuesByName = {};
  const dates = [..._dates];
  for (let i = 0; i < RANDOM_NAMES.length; i++) {
    const name = RANDOM_NAMES[i];
    let smoothRandom = useSmoothRandom(SMOOTHING_FACTOR, 0.5);
    let values = [];
    while (values.length < DATES_COUNT) {
      values.push({
        value: smoothRandom(),
        name: name,
        date: dates[values.length].toISOString(),
      });
    }
    const parsedValues = values.map((v) => {
      const value = v.value * 100;
      const displayValue = value.toFixed(2);
      if (minimumValue === null || value < minimumValue) {
        minimumValue = value;
      }
      if (maximumValue === null || value > maximumValue) {
        maximumValue = value;
      }
      return {
        ...v,
        value,
        displayValue,
      };
    });
    valuesByName[name] = {
      name: name,
      values: parsedValues,
    };
  }
  return valuesByName;
}

const _valuesByName = getValuesByName();

function getDatasets() {
  const dates = [..._dates];
  const valuesByName = { ..._valuesByName };

  const datasets = dates.map((date) => {
    const datapoints = Object.values(valuesByName).map((v, i) => {
      const value = v.values.find((v) => v.date === date.toISOString());
      const name = v.name;
      const normalizedName = name.replace(/\s/g, "-").toLowerCase();
      const displayName = name.split(" ").slice(0, 2).join(" ");
      return {
        id: `${normalizedName}-${i}`,
        x: value.value,
        nextDatapoint: null,
        previousDatapoint: null,
        transitionValues: [],
        y: name,
        rank: null,
        value: value.value,
        displayValue: value.displayValue,
        name: name,
        displayName: displayName,
        normalizedName: normalizedName,
        date: date.toISOString(),
      };
    });

    return {
      label: date.toISOString(),
      data: datapoints,
      dataForTransition: [],
      backgroundColor: `transparent`,
      borderColor: `transparent`,
    };
  });

  datasets.forEach((dataset, datasetIndex) => {
    dataset.data
      .sort((a, b) => b.x - a.x)
      .forEach((datapoint, i) => {
        datapoint.rank = i + 1;
      });
    dataset.dataForTransition.push(
      ...dataset.data.filter((d) => d.rank <= DISPLAY_COUNT)
    );
    const { data } = dataset;
    let previousDataset = datasetIndex > 0 ? datasets[datasetIndex - 1] : null;
    let nextDataset =
      datasetIndex < datasets.length - 1 ? datasets[datasetIndex + 1] : null;
    data.forEach((datapoint) => {
      if (previousDataset) {
        const previousDatapoint = previousDataset.data.find(
          (d) => d.normalizedName == datapoint.normalizedName
        );
        const min = Math.min(datapoint.value, previousDatapoint.value);
        const max = Math.max(datapoint.value, previousDatapoint.value);
        let transitionValues = Array.from(
          { length: TRANSITION_VALUES_COUNT },
          (_, i) => {
            if (i == 0) return datapoint.value;
            if (i == TRANSITION_VALUES_COUNT - 1)
              return previousDatapoint.value;
            const newValue =
              min + (max - min) * (i / (TRANSITION_VALUES_COUNT - 1));
            const parsedValue = Math.round(newValue * 100) / 100;
            return parsedValue;
          }
        ).sort((a, b) => {
          if (datapoint.value > previousDatapoint.value) {
            return a - b;
          } else {
            return b - a;
          }
        });
        datapoint.transitionValues = transitionValues;
      }
      if (nextDataset) {
        const nextDatapoint = nextDataset.data.find(
          (d) => d.normalizedName == datapoint.normalizedName
        );
      }
    });
  });
  return datasets;
}

const optionScales = {
  x: {
    display: true,
    grid: {
      color: "rgba(255, 255, 255, 0.05)",
    },
    ticks: {
      color: "white",
      font: {
        size: 12,
        style: "normal",
      },
    },
    border: {
      color: "rgba(255, 255, 255, 0.25)",
    },
    min: minimumValue == null ? null : Math.floor(minimumValue),
    max: maximumValue == null ? null : Math.ceil(maximumValue),
  },
  y: {
    display: true,
    beginAtZero: true,
    position: "left",
    grid: {
      color: "rgba(255, 255, 255, 0.1)",
    },
    border: {
      color: "rgba(255, 255, 255, 0.25)",
    },
    min: 0,
    max: DISPLAY_COUNT - 1,
    ticks: {
      color: function (context) {
        return "white";
      },
      font: function (context) {
        return { size: 14, style: "normal", weight: "bold" };
      },
      callback: function (val, index) {
        const datapoint = datasets[0].data[index];
        return `#${datapoint.rank}`;
      },
    },
  },
};

const optionPlugins = {
  legend: {
    display: false,
  },
  tooltip: {
    enabled: false,
  },
};

const optionAnimations = {
  colors: {
    duration: colorAnimationDuration(),
  },
  y: {
    duration: 0,
    easing: "linear",
  },
  x: {
    duration: 0,
    easing: "linear",
  },
};

const optionElements = {
  bar: {
    borderWidth: 2,
  },
};

const plugins = [
  {
    afterDatasetsDraw(chart, args, pluginOptions) {
      if (!afterDatasetsUpdateWasCalled) {
        return;
      }
      console.log("Calling chart's afterDatasetsDraw callback...");
      afterDatasetsUpdateWasCalled = false;
      updateOverlayElements(chart, currentDatasetIndex);
    },
    afterDatasetsUpdate(chart, args, pluginOptions) {
      afterDatasetsUpdateWasCalled = true;
    },
  },
];

const chartOptions = {
  responsive: true,
  aspectRatio: aspectRatio,
  maintainAspectRatio: true,
  indexAxis: "y",
  elements: optionElements,
  animations: optionAnimations,
  responsive: true,
  plugins: optionPlugins,
  scales: optionScales,
};

function getOverlayElementFor(
  datapoint,
  chartContainer,
  barTop,
  barLeft,
  barHeight
) {
  const id = `${chartId}-overlay-element-${datapoint.normalizedName}`;

  let overlayElement = document.querySelector(`#${id}`);
  if (!overlayElement) {
    overlayElement = document.createElement("div");
    overlayElement.id = id;
    overlayElement.classList.add("overlay-element");
    chartContainer.appendChild(overlayElement);
  }
  // overlayElement.style.transition = `all ${Y_SCALE_ANIMATION_DURATION}ms linear`;
  overlayElement.style.top = `${barTop}px`;
  overlayElement.style.left = `${barLeft}px`;
  overlayElement.style.transform = `translateY(-${barHeight / 2}px)`;
  overlayElement.style.height = `${barHeight}px`;
  return overlayElement;
}

function udpateCurrentAndNextValueFor(
  overlayElement,
  displayValue,
  transitionValues,
  nextValue
) {
  overlayElement.dataset.value = displayValue;

  if (transitionValues?.length > 0) {
    nextValue = transitionValues[transitionValues.length - 1];
    let nextDisplayValue = nextValue.toString();
    if (nextDisplayValue.length == 2) {
      nextDisplayValue = `${nextDisplayValue}.00`;
    } else if (nextDisplayValue.length == 4) {
      nextDisplayValue = `${nextDisplayValue}0`;
    } else if (nextDisplayValue.length > 5) {
      nextDisplayValue = `${nextDisplayValue.slice(0, 5)}`;
    }
    overlayElement.dataset.nextValue = nextDisplayValue;
  }
  return nextValue;
}

function setInnerContentFor(
  overlayElement,
  displayName,
  displayValue,
  barWidth,
  margin,
  imageWidth
) {
  let innerContentElement = overlayElement.querySelector(".inner-content");
  if (!innerContentElement) {
    const innerHtml = `
      <div class="inner-content">
      <div class="name">
      ${displayName}
      </div>
      <div class="avatar">
      <img src="${IMAGE_URL}" />
      </div>
      <div class="value">
      ${displayValue}
      </div>
      </div>
      `;
    overlayElement.innerHTML = innerHtml;
    innerContentElement = overlayElement.querySelector(".inner-content");
  }

  // innerContentElement.style.transition = `max-width ${Y_SCALE_ANIMATION_DURATION}ms linear`;
  innerContentElement.style.maxWidth = `${barWidth - 8}px`;
  innerContentElement.style.height = `calc(100% - ${margin * 2}px)`;
  innerContentElement.style.margin = `${margin}px ${0}px`;
  innerContentElement.style.padding = `${0}px ${margin}px`;

  const avatarElement = overlayElement.querySelector(".avatar");
  avatarElement.style.width = `${imageWidth}px`;
  avatarElement.style.height = `${imageWidth}px`;
  avatarElement.style.marginLeft = `${margin * 2}px`;
  avatarElement.style.flexShrink = "0";
}

function updateLayoutAndContent(
  datasetIndex,
  scales,
  barHeight,
  imageWidth,
  chartContainer,
  margin,
  isFirstDataset,
  isLastDataset
) {
  datasets[datasetIndex].data.forEach((datapoint, index) => {
    const barTop = scales.y.getPixelForValue(index);
    const barLeft = scales.x.left;
    const barRight = scales.x.getPixelForValue(datapoint.x);
    const barWidth = barRight - barLeft;

    if (index == 0) {
      barHeight = scales.y.getPixelForValue(index + 1) - barTop;
      imageWidth = barHeight / 1.75;
    }

    const overlayElement = getOverlayElementFor(
      datapoint,
      chartContainer,
      barTop,
      barLeft,
      barHeight
    );

    const { value, rank, displayValue, displayName, transitionValues } =
      datapoint;

    let nextValue = null;

    nextValue = udpateCurrentAndNextValueFor(
      overlayElement,
      displayValue,
      transitionValues,
      nextValue
    );

    setInnerContentFor(
      overlayElement,
      displayName,
      displayValue,
      barWidth,
      margin,
      imageWidth
    );

    const valueElement = overlayElement.querySelector(".value");
    valueElement.style.marginLeft = `${margin * 2}px`;

    if (rank > DISPLAY_COUNT) {
      overlayElement.style.opacity = "0";
    } else {
      overlayElement.style.opacity = "1";
    }

    if (isFirstDataset || isLastDataset) return;

    valueElement.textContent = displayValue;
  });
}

function setTransitionsForDataset(currentDatasetIndex) {
  datasets[currentDatasetIndex].dataForTransition.forEach(
    (datapoint, index) => {
      const customElement = document.querySelector(
        `#${chartId}-overlay-element-${datapoint.normalizedName}`
      );
      if (!customElement) return;

      const valueElement = customElement.querySelector(".value");
      if (!valueElement) return;

      const { transitionValues } = datasets[currentDatasetIndex].data[index];

      // if (datapoint.rank > DISPLAY_COUNT) return;
      // if (previousDatapoint && previousDatapoint.rank > DISPLAY_COUNT) return;
      // if (nextDatapoint && nextDatapoint.rank > DISPLAY_COUNT) return;

      let totalDelay = 0;

      transitionValues.forEach((transitionValue, transitionValueIndex) => {
        totalDelay += chartUpdateDelay / TRANSITION_VALUES_COUNT;
        setTimeout(() => {
          const _value = transitionValue;
          let _displayValue = _value.toString();
          if (_displayValue.length == 2) {
            _displayValue = `${_displayValue}.00`;
          } else if (_displayValue.length == 4) {
            _displayValue = `${_displayValue}0`;
          } else if (_displayValue.length > 5) {
            _displayValue = `${_displayValue.slice(0, 5)}`;
          }
          valueElement.textContent = _displayValue;
        }, totalDelay);
        if (transitionValueIndex == transitionValues.length - 1) {
          if (overlayInterval != null) {
            clearInterval(overlayInterval);
            overlayInterval = null;
            return;
          }
        }
      });
    },
    chartUpdateDelay
  );
}

function parseValue(transitionValue) {
  const _value = transitionValue;
  let _displayValue = _value.toString();
  if (_displayValue.length == 2) {
    _displayValue = `${_displayValue}.00`;
  } else if (_displayValue.length == 4) {
    _displayValue = `${_displayValue}0`;
  } else if (_displayValue.length > 5) {
    _displayValue = `${_displayValue.slice(0, 5)}`;
  }
  return _displayValue;
}

function dispatchChartAction(action) {
  console.log("");
  console.log("Dispatching chart action...");

  lastDispatchedActions.push(action);
  if (lastDispatchedActions.length > 5) {
    lastDispatchedActions.shift();
  }

  chartContainer.dispatchEvent(
    new CustomEvent("chart-action", {
      detail: {
        action,
      },
    })
  );
}

function setProgressBar() {
  console.log("Initializing progress bar...");
  const dates = [..._dates];
  dates.forEach((date, index) => {
    const markerContainer = document.createElement("div");
    markerContainer.classList.add("dataset-marker-container");
    markerContainer.style.position = "absolute";
    markerContainer.style.left = `${(index / (dates.length - 1)) * 100}%`;
    markerContainer.style.top = "50%";
    markerContainer.style.width = `${progressBar.clientHeight * 4}px`;
    markerContainer.style.height = `${progressBar.clientHeight * 4}px`;
    markerContainer.style.borderRadius = "999px";
    markerContainer.style.backgroundColor = "transparent";
    markerContainer.style.transform = "translate(-50%, -50%)";
    markerContainer.style.display = "flex";
    markerContainer.style.justifyContent = "center";
    markerContainer.style.alignItems = "center";
    markerContainer.style.cursor = "pointer";
    markerContainer.style.zIndex = "1";
    markerContainer.setAttribute("data-datasetindex", index);
    progressBarContainer.appendChild(markerContainer);

    const marker = document.createElement("div");
    marker.classList.add("real-dataset-marker");
    marker.style.height = `${progressBar.clientHeight / 2}px`;
    marker.style.width = `${progressBar.clientHeight / 2}px`;
    marker.style.borderRadius = "999px";
    marker.style.backgroundColor = "rgba(255,255,255,0.75)";
    marker.style.zIndex = "1";
    markerContainer.appendChild(marker);
  });
}

function chartResizedCallback(chart) {
  const customElements = document.querySelectorAll(`.overlay-element`);
  setTimeout(() => {
    if (customElements) {
      customElements.forEach((customElement) => {
        customElement.classList.add("no-transitions");
        const innerContentElement =
          customElement.querySelector(".inner-content");
        if (innerContentElement) {
          innerContentElement.classList.add("no-transitions");
        }
      });
    }
  }, 100);
  setTimeout(() => {
    updateOverlayElements(chart, currentDatasetIndex);
    if (customElements) {
      customElements.forEach((customElement) => {
        customElement.classList.add("no-transitions");
        const innerContentElement =
          customElement.querySelector(".inner-content");
        if (innerContentElement) {
          innerContentElement.classList.add("no-transitions");
        }
      });
    }
    resizeCallbackIsCalled = false;
  }, 150);
}

function mergeData(currentDataset, nextDataset, chartData) {
  return currentDataset.data
    .map((datapoint, i) => {
      const nextDatapoint = nextDataset.data.find(
        (nextDatapoint) => nextDatapoint.name == datapoint.name
      );
      return {
        labels: chartData.labels[i],
        dataPoint: currentDataset.data[i],
        nextDatapoint,
        backgroundColor: currentDataset.backgroundColor[i],
        borderColor: currentDataset.borderColor[i],
      };
    })
    .sort((a, b) => {
      return a.nextDatapoint.rank - b.nextDatapoint.rank;
    });
}

function getNewData(mergedData) {
  const newLabels = [];
  const newBackgroundColor = [];
  const newBorderColor = [];

  for (let i = 0; i < mergedData.length; i++) {
    const { labels, nextDatapoint, backgroundColor, borderColor } =
      mergedData[i];
    newLabels.push(`${nextDatapoint.y}`);
    newBackgroundColor.push(nextDatapoint.backgroundColor);
    newBorderColor.push(nextDatapoint.borderColor);
    const correspondingDataPoint = chart.config.data.datasets[0].data.find(
      (dataPoint) => dataPoint.y == nextDatapoint.y
    );
    correspondingDataPoint.x = nextDatapoint.x;
  }

  return {
    newLabels,
    newBackgroundColor,
    newBorderColor,
  };
}

function setTransitionProperties(chart) {
  if (chart) {
    chart.options.animations.x.duration = xScaleAnimationDuration();
    chart.options.animations.y.duration = yScaleAnimationDuration();
  }
  const progressBarFilledPart = document.querySelector(
    ".progress-bar__filled-part"
  );
  if (progressBarFilledPart) {
    progressBarFilledPart.style.transition = `max-width ${chartUpdateDelay}ms linear`;
  }
  const overlayElements = document.querySelectorAll(`.overlay-element`);
  if (overlayElements) {
    overlayElements.forEach((overlayElement) => {
      overlayElement.style.transition = `all ${yScaleAnimationDuration()}ms linear`;
      const innerContentElement =
        overlayElement.querySelector(".inner-content");
      if (innerContentElement) {
        innerContentElement.style.transition = `max-width ${yScaleAnimationDuration()}ms linear`;
      }
    });
  }
}

function removeTransitionProperties(chart) {
  if (chart) {
    chart.options.animations.x.duration = 0;
    chart.options.animations.y.duration = 0;
  }
  const progressBarFilledPart = document.querySelector(
    ".progress-bar__filled-part"
  );
  if (progressBarFilledPart) {
    progressBarFilledPart.style.transition = `none`;
  }
  const overlayElements = document.querySelectorAll(`.overlay-element`);
  if (overlayElements) {
    overlayElements.forEach((overlayElement) => {
      overlayElement.style.transition = `none`;
      const innerContentElement =
        overlayElement.querySelector(".inner-content");
      if (innerContentElement) {
        innerContentElement.style.transition = `none`;
      }
    });
  }
}

function updateChartControls() {
  btnPlay.disabled = chartControlsState.btnPlay.disabled;
  btnPause.disabled = chartControlsState.btnPause.disabled;
  btnReset.disabled = chartControlsState.btnReset.disabled;
  btnNext.disabled = chartControlsState.btnNext.disabled;
  btnPrevious.disabled = chartControlsState.btnPrevious.disabled;
  inputAnimationSpeed.disabled =
    chartControlsState.inputAnimationSpeed.disabled;
}

function udpateAnimationDuration(chart, value) {
  if (value == 1) {
    chartUpdateDelay = 7000;
  } else {
    chartUpdateDelay = 10000 / value;
  }

  if (chart) {
    setTransitionProperties(chart);
  }
}
