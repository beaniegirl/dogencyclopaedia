function opencontent1(){
    document.getElementById("setcontent1").style.display="block";

}
function closecontent1(){
    document.getElementById("setcontent1").style.display="none";
    
}
function opencontent2(){
    document.getElementById("setcontent2").style.display="block";

}
function closecontent2(){
    document.getElementById("setcontent2").style.display="none";
    
}
function opencontent3(){
    document.getElementById("setcontent3").style.display="block";

}
function closecontent3(){
    document.getElementById("setcontent3").style.display="none";
    
}


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function selector()
{
    var a; 
    a= prompt("Please enter a breed of your choice from the displayed list (enter a number between 1-6): ");

    switch(a)
    {
    case '1':document.getElementById("changecontent").innerHTML="THE GREAT DANE <br> PHYSICAL APPEARANCE AND TEMPERAMENT:The Great Dane is a giant dog that combines nobility with robustness and power with elegance. It has a long narrow head and neck.ts neck is long and muscular and its front legs are perfectly straight. It has muscular thighs and round feet with short, dark nails. All Danes have short, thick, shiny, close-fitting hair. The color of the coat indicates the variety, fawn, brindle, black, blue, mantle harlequin and sometimes merle.The Great Dane is a giant of a dog with a patient and gentle personality. These sweet natured dogs make great family pets, and are attentive and devoted to their owners. The Great Dane is best suited to those with some experience of dog ownership, as they can be stubborn and bossy. Early and extensive socialization is also important to promote a stable, confident manner. These dogs do need plenty of attention and devotion from their owners, and are not suited to those with little time to commit to a pet. <br>Training should be consistent and firm, yet positive. These dogs are very sensitive, and some can come across as quite aloof. However, with consistent training and extensive, early socialization the Great Dane can make a very loyal and loving - if rather large - pet.Combing and brushing the short coat of this breed regularly is acceptable for this giant breed.TRAINING, EXERCISE AND HEALTH ISSUES:The life expectancy of the Great Dane is around 6-8 years, which is far shorter than many other dog breeds. There are a number of problems associated with this breed, and this includes deafness, heart problems, bloat, HD, HOD, cataracts, and bone cancer. Care should also be taken in extreme temperatures, as the Great Dane is sensitive to extreme heat or cold.Without proper exercise the Great Dane will become rambunctious and somewhat independent, often choosing to ignore the owner's commands. The Great Dane does prefer several hours a day outside in moderate temperatures.<br><br><br><br>"
    break;
    case '2':document.getElementById("changecontent").innerHTML="THE PEKINGESE <br> PHYSICAL APPEARANCE AND TEMPERAMENT:It has a broad head that is wide between their large, dark, lucid and slightly prominent eyes. The face is flat with a dark, wrinkled muzzle, and drooping heart-shaped, long feathering ears. Their necks are short and thick.  This breed makes a wonderful companion dog, and his low exercise demands mean that he is also ideal for those that cannot get around much, such as the elderly and the disabled. The Pekingese is a loyal and affectionate dog, and because of his tendency to bark can make an effective watchdog. These dogs have a very sensitive personality, and do not take kindly to being handled roughly or being shouted at. This is not the right choice for impatient people or for those with little time for their pets. He is also not the right choice for those looking for total peace and quiet, as he has a tendency to snore and sneeze because of his short muzzle. TRAINING, EXERCISE AND HEALTH ISSUES: Good grooming is a must for the Pekingese. Bathing should be done once or twice a month. The life expectancy of the Pekingese is around 12-15 years.They are prone to breathing problems, eye problems, herniated disc, and dislocated kneecaps. Special care must be given to not overfeed as they gain weight easily.  They benefit from, and greatly enjoy short walks a few times per day. They make excellent apartment dwellers. Most Pekingese do not like walks.<br><br><br><br> "
    break;
    case '3':document.getElementById("changecontent").innerHTML="THE PHARAOH HOUND <br> PHYSICAL APPEARANCE AND TEMPERAMENT: The Pharaoh Hound is a graceful, athletic sight hound. The flat skull and muzzle are long and slim. The small eyes are amber or light brown. The ears are very large and stand erect. The nose is tan and speckled with pink. The teeth should meet in a scissors bite. The jaw is powerful. The neck is fairly long and slightly arched.  The coat is short and glossy in red or tan, often with white markings. Graceful, elegant, and dignified, the Pharaoh Hound is an agile and energetic dog with plenty to offer to the right family or owner. These dogs often like to bark, and although this makes him an effective watchdog he may not be the right choice for those looking for a quiet life. <br> TRAINING, EXERCISE AND HEALTH ISSUES: The life expectancy of the Pharaoh Hound is around 12-15 years, and this is a very healthy breed in general. There are just a few health problems to look out for with these dogs, and this includes optic nerve problems and sensitivity to chemicals and drugs. The Pharaoh hound absolutely requires a great deal of exercise every day, otherwise they get very anxious and their already frequent barking may become excessive.<br><br><br><br> "
    break;
    case '4':document.getElementById("changecontent").innerHTML="THE ROTTWEILER <br> PHYSICAL APPEARANCE AND TEMPERAMENT: The Rottweiler has a massive, powerful body. Muscular and athletic, it has a broad head and rounded forehead. The muzzle is well-developed with a scissors bite. The coat is short, hard and thick. It is black with brown markings on the cheeks and muzzle, paws and legs. The Rottweiler is a dog that loves to work, and has plenty of stamina, power, and endurance. These dogs are fiercely loyal and protective, and will do whatever it takes to defend their loved ones.  He is an extremely territorial creature, and early socialization for this breed is essential. <br> TRAINING, EXERCISE AND HEALTH ISSUES: The Rottweiler has a shorter life expectancy than many other breeds, and lives to around 9-10 years. Rottweiler's are prone to hip and elbow dysplasia, a malformation of the joints which can lead to crippling and a bone and cartilage problem called OCD. This can be prevented by properly exercising the dog and making sure that as a puppy, they don't suffer any joint stress. This breed loves long walks and should have at least two long walks per day totalling at least two hours of exercise per day.<br><br><br><br>";
    break;
    case '5':document.getElementById("changecontent").innerHTML="THE SHIBA INU <br> PHYSICAL APPEARANCE AND TEMPERAMENT: The Shiba is a small, compact, agile furry dog that looks like a miniature Akita. It has a pointed face, broad forehead and triangular prick ears. The eyes are small and dark. The teeth should form a scissors bite. The nose is dark. An independent, strong minded, and hardworking dog, the Shiba Inu is a creature with plenty of spirit and courage. These are not clingy dogs and are not overly demanding, but he can be willful and stubborn, making him best suited to those with experience of dog ownership. The Shiba Inu is also very territorial and will be suspicious of strangers, which adds to his watchdog abilities. <br> TRAINING, EXERCISE AND HEALTH ISSUES: The life expectancy for Shibas is 12-15 years.  Patellar luxation will sometimes appear in Shibas. The Shiba Inu is an undemanding dog that will adapt to your circumstances, so long as it gets a daily walk. It is a very active dog and will be healthier and happier with regular exercise. This breed can walk for hours on end as it has tremendous endurance.<br><br><br><br>"
    break;
    case '6':document.getElementById("changecontent").innerHTML="THE WEIMARANER <br> PHYSICAL APPEARANCE AND TEMPERAMENT: The Weimaraner is a sleek, moderately large, athletic dog with beautiful lines.  It comes in a short, fine, smooth gray coat or a rarer longhaired variety .  The limbs are long and muscular. The Weimaraner has webbed feet for swimming.  These large dogs have boundless energy, and need to be in a household that is active, as well as with people that have plenty of time and devotion to dedicate to a pet. These dogs do not like to be confined or neglected, and this can lead to boredom, frustration, and destructive behavior. These dogs need early socialization, consistent training, and a confident, assertive owner with some experience of dog ownership and training. <br> TRAINING, EXERCISE AND HEALTH ISSUES: The life expectancy of the Weimaraner is around 10-12 years.  A major concern of the Weimaraner is Gastric torsion, or bloat. This is when the stomach becomes twisted and traps the stomach contents, with gas also becoming trapped inside. This is a serious condition of dogs. The Weimaraner requires strenuous exercise and stimulation.<br><br><br><br>"
    break;
    default:alert("Invalid Input !!! Try Again!!");
}
}
