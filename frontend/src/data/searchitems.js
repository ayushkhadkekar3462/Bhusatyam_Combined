const data = [
  { "title": "Mumbai, MH", "subtitle": "Maharashtra", "lat": 19.0760, "lng": 72.8777 },
  { "title": "Delhi, DL", "subtitle": "Delhi", "lat": 28.6139, "lng": 77.2090 },
  { "title": "Bengaluru, KA", "subtitle": "Karnataka", "lat": 12.9716, "lng": 77.5946 },
  { "title": "Chennai, TN", "subtitle": "Tamil Nadu", "lat": 13.0827, "lng": 80.2707 },
  { "title": "Kolkata, WB", "subtitle": "West Bengal", "lat": 22.5726, "lng": 88.3639 },
  { "title": "Hyderabad, TG", "subtitle": "Telangana", "lat": 17.3850, "lng": 78.4867 },
  { "title": "Ahmedabad, GJ", "subtitle": "Gujarat", "lat": 23.0225, "lng": 72.5714 },
  { "title": "Pune, MH", "subtitle": "Maharashtra", "lat": 18.5204, "lng": 73.8567 },
  { "title": "Jaipur, RJ", "subtitle": "Rajasthan", "lat": 26.9124, "lng": 75.7873 },
  { "title": "Surat, GJ", "subtitle": "Gujarat", "lat": 21.1702, "lng": 72.8311 },
  { "title": "Lucknow, UP", "subtitle": "Uttar Pradesh", "lat": 26.8467, "lng": 80.9462 },
  { "title": "Kanpur, UP", "subtitle": "Uttar Pradesh", "lat": 26.4499, "lng": 80.3319 },
  { "title": "Nagpur, MH", "subtitle": "Maharashtra", "lat": 21.1458, "lng": 79.0882 },
  { "title": "Indore, MP", "subtitle": "Madhya Pradesh", "lat": 22.7196, "lng": 75.8577 },
  { "title": "Bhopal, MP", "subtitle": "Madhya Pradesh", "lat": 23.2599, "lng": 77.4126 },
  { "title": "Coimbatore, TN", "subtitle": "Tamil Nadu", "lat": 11.0168, "lng": 76.9558 },
  { "title": "Patna, BR", "subtitle": "Bihar", "lat": 25.5941, "lng": 85.1376 },
  { "title": "Vadodara, GJ", "subtitle": "Gujarat", "lat": 22.3076, "lng": 73.1812 },
  { "title": "Ghaziabad, UP", "subtitle": "Uttar Pradesh", "lat": 28.6692, "lng": 77.4538 },
  { "title": "Ludhiana, PB", "subtitle": "Punjab", "lat": 30.9009, "lng": 75.8573 },
  { "title": "Agra, UP", "subtitle": "Uttar Pradesh", "lat": 27.1767, "lng": 78.0081 },
  { "title": "Nashik, MH", "subtitle": "Maharashtra", "lat": 20.0110, "lng": 73.7908 },
  { "title": "Jabalpur, MP", "subtitle": "Madhya Pradesh", "lat": 23.1645, "lng": 79.9502 },
  { "title": "Raipur, CG", "subtitle": "Chhattisgarh", "lat": 21.2514, "lng": 81.6296 },
  { "title": "Jodhpur, RJ", "subtitle": "Rajasthan", "lat": 26.2389, "lng": 73.0243 },
  { "title": "Shimla, HP", "subtitle": "Himachal Pradesh", "lat": 31.1048, "lng": 77.1734 },
  { "title": "Dehradun, UK", "subtitle": "Uttarakhand", "lat": 30.3165, "lng": 78.0322 },
  { "title": "Ranchi, JH", "subtitle": "Jharkhand", "lat": 23.3441, "lng": 85.3096 },
  { "title": "Bilaspur, CG", "subtitle": "Chhattisgarh", "lat": 22.1002, "lng": 82.1496 },
  { "title": "Ottawa, ON", "subtitle": "Ontario", "lat": 45.4215, "lng": -75.6972 },
  { "title": "Thane, MH", "subtitle": "Maharashtra", "lat": 19.2183, "lng": 72.9781 },
  { "title": "Meerut, UP", "subtitle": "Uttar Pradesh", "lat": 28.9845, "lng": 77.7064 },
  { "title": "Faridabad, HR", "subtitle": "Haryana", "lat": 28.4089, "lng": 77.3178 },
  { "title": "Rajkot, GJ", "subtitle": "Gujarat", "lat": 22.3039, "lng": 70.8022 },
  { "title": "Kalyan-Dombivli, MH", "subtitle": "Maharashtra", "lat": 19.2403, "lng": 73.1305 },
  { "title": "Vasai-Virar, MH", "subtitle": "Maharashtra", "lat": 19.3919, "lng": 72.8397 },
  { "title": "Varanasi, UP", "subtitle": "Uttar Pradesh", "lat": 25.3176, "lng": 82.9739 },
  { "title": "Srinagar, JK", "subtitle": "Jammu & Kashmir", "lat": 34.0837, "lng": 74.7973 },
  { "title": "Aurangabad, MH", "subtitle": "Maharashtra", "lat": 19.8762, "lng": 75.3433 },
  { "title": "Dhanbad, JH", "subtitle": "Jharkhand", "lat": 23.7957, "lng": 86.4304 },
  { "title": "Amritsar, PB", "subtitle": "Punjab", "lat": 31.6330, "lng": 74.8723 },
  { "title": "Navi Mumbai, MH", "subtitle": "Maharashtra", "lat": 19.0330, "lng": 73.0297 },
  { "title": "Allahabad, UP", "subtitle": "Uttar Pradesh", "lat": 25.4358, "lng": 81.8463 },
  { "title": "Howrah, WB", "subtitle": "West Bengal", "lat": 22.5958, "lng": 88.2636 },
  { "title": "Gwalior, MP", "subtitle": "Madhya Pradesh", "lat": 26.2183, "lng": 78.1828 },
  { "title": "Amravati, MH", "subtitle": "Maharashtra", "lat": 20.9374, "lng": 77.7796 },
  { "title": "Bhubaneswar, OR", "subtitle": "Odisha", "lat": 20.2961, "lng": 85.8245 },
  { "title": "Mangalore, KA", "subtitle": "Karnataka", "lat": 12.9141, "lng": 74.8560 },
  { "title": "Tiruchirappalli, TN", "subtitle": "Tamil Nadu", "lat": 10.7905, "lng": 78.7047 },
  { "title": "Noida, UP", "subtitle": "Uttar Pradesh", "lat": 28.5355, "lng": 77.3910 },
  { "title": "Jamshedpur, JH", "subtitle": "Jharkhand", "lat": 22.8046, "lng": 86.2029 },
  { "title": "Udaipur, RJ", "subtitle": "Rajasthan", "lat": 24.5854, "lng": 73.7125 },
  { "title": "Guwahati, AS", "subtitle": "Assam", "lat": 26.1445, "lng": 91.7362 },
  { "title": "Hubli-Dharwad, KA", "subtitle": "Karnataka", "lat": 15.3647, "lng": 75.1240 },
  { "title": "Mysore, KA", "subtitle": "Karnataka", "lat": 12.2958, "lng": 76.6394 },
  { "title": "Salem, TN", "subtitle": "Tamil Nadu", "lat": 11.6643, "lng": 78.1460 },
  { "title": "Thiruvananthapuram, KL", "subtitle": "Kerala", "lat": 8.5241, "lng": 76.9366 },
  { "title": "Madurai, TN", "subtitle": "Tamil Nadu", "lat": 9.9252, "lng": 78.1198 },
  { "title": "Warangal, TG", "subtitle": "Telangana", "lat": 17.9784, "lng": 79.5941 },
  { "title": "Guntur, AP", "subtitle": "Andhra Pradesh", "lat": 16.3067, "lng": 80.4365 },
  { "title": "Bhiwandi, MH", "subtitle": "Maharashtra", "lat": 19.2813, "lng": 73.0483 },
  { "title": "Cuttack, OR", "subtitle": "Odisha", "lat": 20.4625, "lng": 85.8828 },
  { "title": "Kochi, KL", "subtitle": "Kerala", "lat": 9.9312, "lng": 76.2673 },
  { "title": "Bhavnagar, GJ", "subtitle": "Gujarat", "lat": 21.7645, "lng": 72.1519 },
  { "title": "Jammu, JK", "subtitle": "Jammu & Kashmir", "lat": 32.7266, "lng": 74.8570 },
  { "title": "Belgaum, KA", "subtitle": "Karnataka", "lat": 15.8497, "lng": 74.4977 },
  { "title": "Gorakhpur, UP", "subtitle": "Uttar Pradesh", "lat": 26.7606, "lng": 83.3732 },
  { "title": "Jalandhar, PB", "subtitle": "Punjab", "lat": 31.3260, "lng": 75.5762 },
  { "title": "Tiruppur, TN", "subtitle": "Tamil Nadu", "lat": 11.1085, "lng": 77.3411 },
  { "title": "Dharwad, KA", "subtitle": "Karnataka", "lat": 15.4589, "lng": 75.0078 },
  { "title": "Kozhikode, KL", "subtitle": "Kerala", "lat": 11.2588, "lng": 75.7804 },
  { "title": "Ujjain, MP", "subtitle": "Madhya Pradesh", "lat": 23.1793, "lng": 75.7849 },
  { "title": "Vijayawada, AP", "subtitle": "Andhra Pradesh", "lat": 16.5062, "lng": 80.6480 },
  { "title": "Agartala, TR", "subtitle": "Tripura", "lat": 23.8315, "lng": 91.2868 },
  { "title": "Vellore, TN", "subtitle": "Tamil Nadu", "lat": 12.9165, "lng": 79.1325 },
  { "title": "Jhansi, UP", "subtitle": "Uttar Pradesh", "lat": 25.4484, "lng": 78.5685 },
  { "title": "Nellore, AP", "subtitle": "Andhra Pradesh", "lat": 14.4426, "lng": 79.9865 },
  { "title": "Sangli, MH", "subtitle": "Maharashtra", "lat": 16.8661, "lng": 74.5554 },
  { "title": "Panipat, HR", "subtitle": "Haryana", "lat": 29.3909, "lng": 76.9635 },
  { "title": "Trichy, TN", "subtitle": "Tamil Nadu", "lat": 10.7905, "lng": 78.7047 },
  { "title": "Nanded, MH", "subtitle": "Maharashtra", "lat": 19.1383, "lng": 77.3207 },
  { "title": "Aligarh, UP", "subtitle": "Uttar Pradesh", "lat": 27.8974, "lng": 78.0880 },
  { "title": "Bikaner, RJ", "subtitle": "Rajasthan", "lat": 28.0229, "lng": 73.3119 },
  { "title": "Cuttack, OR", "subtitle": "Odisha", "lat": 20.4625, "lng": 85.8828 },
  { "title": "Firozabad, UP", "subtitle": "Uttar Pradesh", "lat": 27.1591, "lng": 78.3958 },
  { "title": "Durgapur, WB", "subtitle": "West Bengal", "lat": 23.5204, "lng": 87.3119 },
  { "title": "Siliguri, WB", "subtitle": "West Bengal", "lat": 26.7271, "lng": 88.3953 }
];

  export default data;