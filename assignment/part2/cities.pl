% Change the working directory
working_directory(_, 'D:/Degree 2023/Degree Year 3 2024/Advanced Programming Language Concepts/Assignment/part2').

% Consult the Prolog file
consult('cities.pl').

% Define the city facts: city(Name, Latitude, Longitude, Country, ISO2, AdminName, Capital, Population, PopulationProper).
city("Kuala Lumpur", 3.1478, 101.6953, "Malaysia", "MY", "Kuala Lumpur", "primary", 8911000, 1768000).
city("Seberang Jaya", 5.4083, 100.3695, "Malaysia", "MY", "Pulau Pinang", "", 946092, 946092).
city("Klang", 3.0333, 101.4500, "Malaysia", "MY", "Selangor", "", 878000, 878000).
city("Ipoh", 4.5972, 101.0750, "Malaysia", "MY", "Perak", "admin", 866772, 866772).
city("George Town", 5.4144, 100.3292, "Malaysia", "MY", "Pulau Pinang", "admin", 708127, 708127).
city("Petaling Jaya", 3.0972, 101.6444, "Malaysia", "MY", "Selangor", "", 638516, 638516).
city("Kuantan", 3.8167, 103.3333, "Malaysia", "MY", "Pahang", "admin", 607778, 607778).
city("Shah Alam", 3.0722, 101.5167, "Malaysia", "MY", "Selangor", "admin", 584340, 584340).
city("Sungai Petani", 5.6500, 100.5000, "Malaysia", "MY", "Kedah", "", 544851, 544851).
city("Johor Bahru", 1.4556, 103.7611, "Malaysia", "MY", "Johor", "admin", 497097, 497097).
city("Kota Bharu", 6.1333, 102.2500, "Malaysia", "MY", "Kelantan", "admin", 491237, 491237).
city("Melaka", 2.1944, 102.2486, "Malaysia", "MY", "Melaka", "admin", 455300, 455300).
city("Kota Kinabalu", 5.9750, 116.0725, "Malaysia", "MY", "Sabah", "admin", 452058, 452058).
city("Seremban", 2.7222, 101.9417, "Malaysia", "MY", "Negeri Sembilan", "admin", 419536, 419536).
city("Sandakan", 5.8333, 118.1167, "Malaysia", "MY", "Sabah", "", 396290, 396290).
city("Kuching", 1.5575, 110.3439, "Malaysia", "MY", "Sarawak", "admin", 325132, 325132).
city("Kluang", 2.0336, 103.3194, "Malaysia", "MY", "Johor", "", 323762, 323762).
city("Muar", 2.0500, 102.5667, "Malaysia", "MY", "Johor", "", 314776, 314776).
city("Pasir Gudang", 1.5028, 103.9356, "Malaysia", "MY", "Johor", "", 312499, 312499).
city("Kuala Terengganu", 5.3292, 103.1361, "Malaysia", "MY", "Terengganu", "admin", 255109, 255109).
city("Sibu", 2.2878, 111.8308, "Malaysia", "MY", "Sarawak", "", 247995, 247995).
city("Taiping", 4.8500, 100.7333, "Malaysia", "MY", "Perak", "", 245182, 245182).
city("Kajang", 2.9931, 101.7889, "Malaysia", "MY", "Selangor", "", 236240, 236240).
city("Miri", 4.3925, 113.9861, "Malaysia", "MY", "Sarawak", "", 234541, 234541).
city("Teluk Intan", 4.0333, 101.0167, "Malaysia", "MY", "Perak", "", 232800, 232800).
city("Kulai", 1.6667, 103.6000, "Malaysia", "MY", "Johor", "", 230000, 230000).
city("Alor Setar", 6.1183, 100.3694, "Malaysia", "MY", "Kedah", "admin", 217000, 217000).
city("Bukit Mertajam", 5.3655, 100.4607, "Malaysia", "MY", "Pulau Pinang", "", 210000, 210000).
city("Lahad Datu", 5.0300, 118.3400, "Malaysia", "MY", "Sabah", "", 199830, 199830).
city("Segamat", 2.5111, 102.8139, "Malaysia", "MY", "Johor", "", 197762, 197762).
city("Tumpat", 6.1667, 102.1667, "Malaysia", "MY", "Kelantan", "minor", 183100, 183100).
city("Keningau", 5.3333, 116.1667, "Malaysia", "MY", "Sabah", "", 173130, 173130).
city("Batu Pahat", 1.8522, 102.9372, "Malaysia", "MY", "Johor", "", 140000, 140000).
city("Batu Gajah", 4.4667, 101.0500, "Malaysia", "MY", "Perak", "", 133422, 133422).
city("Tuaran", 6.1833, 116.2333, "Malaysia", "MY", "Sabah", "", 128200, 128200).
city("Bayan Lepas", 5.2833, 100.2667, "Malaysia", "MY", "Pulau Pinang", "", 122654, 122654).
city("Port Dickson", 2.5167, 101.8000, "Malaysia", "MY", "Negeri Sembilan", "", 119300, 119300).
city("Bintulu", 3.1733, 113.0433, "Malaysia", "MY", "Sarawak", "", 114058, 114058).
city("Tawau", 4.2583, 117.8944, "Malaysia", "MY", "Sabah", "", 113809, 113809).
city("Simanggang", 1.2353, 111.4697, "Malaysia", "MY", "Sarawak", "", 102092, 102092).
city("Labuan", 5.3000, 115.2200, "Malaysia", "MY", "Labuan", "admin", 95120, 95120).
city("Cukai", 4.2332, 103.4479, "Malaysia", "MY", "Terengganu", "", 82425, 82425).
city("Butterworth", 5.3942, 100.3664, "Malaysia", "MY", "Pulau Pinang", "", 80378, 80378).
city("Putrajaya", 2.9300, 101.6900, "Malaysia", "MY", "Putrajaya", "primary", 67964, 67964).
city("Taman Johor Jaya", 1.5333, 103.8167, "Malaysia", "MY", "Johor", "", 66000, 66000).
city("Kangar", 6.4333, 100.2000, "Malaysia", "MY", "Perlis", "admin", 48898, 48898).


% Rules 


% Rule to calculate the distance between two cities
distance(City1, City2, Distance) :-
    city(City1, Lat1, Lon1, _, _, _, _, _, _),
    city(City2, Lat2, Lon2, _, _, _, _, _, _),
    Distance is sqrt((Lat2 - Lat1)^2 + (Lon2 - Lon1)^2).


% Rule to find which city is further from a static city
whosFurther(City1, City2, StaticCity) :-
    distance(City1, StaticCity, Distance1),
    distance(City2, StaticCity, Distance2),
    (Distance1 < Distance2 ->
        format('~w is closer to ~w than ~w is closer to ~w.~n',
        [City1, StaticCity, City2, StaticCity])
    ;
        format('~w is closer to ~w than ~w is closer to ~w.~n',
        [City2, StaticCity, City1, StaticCity])
    ).
    
% Rule to check if two cities are in the same administrative region
sameRegion(City1, City2) :-
    city(City1, _, _, _, _, AdminRegion1, _, _, _),
    city(City2, _, _, _, _, AdminRegion2, _, _, _),
    (AdminRegion1 == AdminRegion2 ->
        format('~w and ~w are in the same administrative region (~w).~n', [City1, City2, AdminRegion1])
    ;
        format('~w and ~w are in different administrative regions (~w and ~w, respectively).~n', [City1, City2, AdminRegion1, AdminRegion2])
    ).
