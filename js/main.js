$('.side-toggle-menu').click(() => {

    if ($('.menu-menu').css('width') === '0px') {
        $('.menu-menu').animate({ width: '270px' }, 700)
        $('.menu-menu ul').slideDown(1000)
        $('.footer').fadeIn(500)

    }
    else {
        $('.menu-menu').animate({ width: '0px' }, 700)
        $('.footer').fadeOut(500)
    }

})

$(document).ready(() => {
    $('#loading .spinner').fadeOut(1000, () => {
        $('#loading').slideUp(1000, () => {
            $('loading').remove()
            $('body').css('overflow', 'visible')
        })
    })
})


$('#toggle').click(() => {
    let width = $('.side-menu').innerWidth()
    if ($('.side-menu').css('left') == '0px') {
        $('.side-menu').animate({ 'left': `-${width}px` }, 500)
        $('.side-nav').animate({ 'left': `0px` }, 500)
        document.getElementById('toggle').classList.remove('fa-xmark')
        document.getElementById('toggle').classList.add('fa-align-justify')
        $('.searchh').animate({ 'top': '100%'}, 700)
        $('.Categoriess').animate({ 'top': '100%'}, 800 )
        $('.Areaa').animate({ 'top': '100%'}, 900 )
        $('.Ingredientss').animate({ 'top': '100%'}, 1000 )
        $('.Contactt').animate({ 'top':'100%'},1100)
        $('.mealss').animate({ 'top':'100%'},1200)
    }
    else {
        $('.side-menu').animate({ 'left': `0px` }, 500)
        $('.side-nav').animate({ 'left': `${width}px` }, 500)
        document.getElementById('toggle').classList.add('fa-xmark')
        document.getElementById('toggle').classList.remove('fa-align-justify')

        $('.searchh').animate({'paddingTop' : '15px' , 'top': '0'}, 1000)
        $('.Categoriess').animate({'paddingTop' : '15px' , 'top': '0'}, 1100 )
        $('.Areaa').animate({'paddingTop' : '15px' , 'top': '0'}, 1200 )
        $('.Ingredientss').animate({'paddingTop' : '15px' , 'top': '0'}, 1300 )
        $('.Contactt').animate({'paddingTop' : '15px' , 'top':'0'},1400)
        $('.mealss').animate({'paddingTop' : '15px' , 'top':'0'},1500)
    }
})

$('.searchh').click(() => {
    $('#Search').fadeIn(500)
    $('#Categories').fadeOut(500)
    $('#Area').fadeOut(500)
    $('#Ingredients').fadeOut(500)
    $('#contact').fadeOut(500)
    $('#meals').fadeOut(500)
    $('#discreption').fadeOut(1000)
    document.getElementById('toggle').classList.remove('fa-xmark')
    document.getElementById('toggle').classList.add('fa-align-justify')

    let width = $('.side-menu').innerWidth()
    $('.side-menu').animate({ 'left': `-${width}px` }, 400)
    $('.side-nav').animate({ 'left': `0px` }, 400)
})
$('.Categoriess').click(() => {
    $('#Categories').fadeIn(500)
    $('#Search').fadeOut(500)
    $('#Area').fadeOut(500)
    $('#Ingredients').fadeOut(500)
    $('#contact').fadeOut(500)
    $('#meals').fadeOut(500)
    $('#discreption').fadeOut(1000)
    document.getElementById('toggle').classList.remove('fa-xmark')
    document.getElementById('toggle').classList.add('fa-align-justify')
    let width = $('.side-menu').innerWidth()
    $('.side-menu').animate({ 'left': `-${width}px` }, 400)
    $('.side-nav').animate({ 'left': `0px` }, 400)
})
$('.Areaa').click(() => {
    $('#Area').fadeIn(500)
    $('#Categories').fadeOut(500)
    $('#Search').fadeOut(500)
    $('#Ingredients').fadeOut(500)
    $('#contact').fadeOut(500)
    $('#meals').fadeOut(500)
    $('#discreption').fadeOut(1000)
    document.getElementById('toggle').classList.remove('fa-xmark')
    document.getElementById('toggle').classList.add('fa-align-justify')
    let width = $('.side-menu').innerWidth()
    $('.side-menu').animate({ 'left': `-${width}px` }, 400)
    $('.side-nav').animate({ 'left': `0px` }, 400)
})
$('.Ingredientss').click(() => {
    $('#Ingredients').fadeIn(500)
    $('#Area').fadeOut(500)
    $('#Categories').fadeOut(500)
    $('#Search').fadeOut(500)
    $('#contact').fadeOut(500)
    $('#meals').fadeOut(500)
    $('#discreption').fadeOut(1000)
    document.getElementById('toggle').classList.remove('fa-xmark')
    document.getElementById('toggle').classList.add('fa-align-justify')
    let width = $('.side-menu').innerWidth()
    $('.side-menu').animate({ 'left': `-${width}px` }, 400)
    $('.side-nav').animate({ 'left': `0px` }, 400)
})
$('.Contactt').click(() => {
    $('#contact').fadeIn(500)
    $('#Ingredients').fadeOut(500)
    $('#Area').fadeOut(500)
    $('#Categories').fadeOut(500)
    $('#Search').fadeOut(500)
    $('#meals').fadeOut(500)
    $('#discreption').fadeOut(1000)
    document.getElementById('toggle').classList.remove('fa-xmark')
    document.getElementById('toggle').classList.add('fa-align-justify')
    let width = $('.side-menu').innerWidth()
    $('.side-menu').animate({ 'left': `-${width}px` }, 400)
    $('.side-nav').animate({ 'left': `0px` }, 400)
})
$('.mealss').click(() => {
    $('#meals').fadeIn(500)
    $('#Ingredients').fadeOut(500)
    $('#Area').fadeOut(500)
    $('#Categories').fadeOut(500)
    $('#Search').fadeOut(500)
    $('#contact').fadeOut(500)
    $('#discreption').fadeOut(1000)
    document.getElementById('toggle').classList.remove('fa-xmark')
    document.getElementById('toggle').classList.add('fa-align-justify')
    let width = $('.side-menu').innerWidth()
    $('.side-menu').animate({ 'left': `-${width}px` }, 400)
    $('.side-nav').animate({ 'left': `0px` }, 400)
})



/////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
async function fetchApiMeals(litter, name) {
    let responseMeal = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?${litter}=${name}`)
    let resultMeal = await responseMeal.json()
    displayMeals(resultMeal)
}

fetchApiMeals('s','A')
searchName.addEventListener('keyup', function () {


    fetchApiMeals("s", searchName.value)
})

searchFirstLetter.addEventListener('keyup', function () {


    fetchApiMeals("f", searchFirstLetter.value)
})

function displayMeals(resultMeal) {
    

    let firstSectionFood = document.getElementById('firstSectionFood')

    let box = ''
    for (let i = 0; i < resultMeal.meals.length; i++) {
        box += `  <div class="col-md-6 col-lg-3 ">
        <div onclick="displayRecipe('${resultMeal.meals[i].idMeal}')" class="itemFood">

            <img class="w-100 rounded-3" src="${resultMeal.meals[i].strMealThumb}" alt="">
            <div  class="itemFood-layer ">
                <p class='fs-2'>
                    ${resultMeal.meals[i].strMeal}
                </p>
            </div>
            </div>


    </div>
`
    }
    firstSectionFood.innerHTML = box
    document.getElementById("searchFood").innerHTML = box

  

}



////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////

async function fetchApiCategory() {
    let responseCategory = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    let resultCategory = await responseCategory.json()
    displayCategory(resultCategory)
}

fetchApiCategory()

function truncate(str, n) {
    return (str.length > n) ? str.slice(0, n - 1) + '...' : str
}
let ccc;

function displayCategory(resultCategory) {

    let categorySectionFood = document.getElementById('categorySectionFood')
    let boxx = ''
    for (let i = 0; i < resultCategory.categories.length; i++) {
        let categoriesDiscreption = truncate(resultCategory.categories[i].strCategoryDescription, 99)
        nn = resultCategory.categories[i].strCategory
        boxx += `  <div class="col-md-6 col-lg-3 ">
    <div  class="itemFood" onclick="displayCategoryfood('${resultCategory.categories[i].strCategory}')">
        <img  class="w-100 rounded-3" src="${resultCategory.categories[i].strCategoryThumb}" alt="">
        <div  class="itemFood-layer text-center">
          <div>  <p class='fs-3'>
          ${resultCategory.categories[i].strCategory}
      </p>
      <p class='fs-5'>
         ${categoriesDiscreption}
      </p></div>
        </div>
    </div>

</div>
`

    }
    categorySectionFood.innerHTML = boxx
}
/////////////////////////////////////////////////////////////////////////////////////


async function fetchApiCategoryfood(api) {
    let responseCategoryfood = await fetch(api)
    let resultCategoryfood = await responseCategoryfood.json()
    return resultCategoryfood.meals
}


async function displayCategoryfood(result) {
    let api = await `https://www.themealdb.com/api/json/v1/1/filter.php?c=${result}`

    let categoryFood2 = await fetchApiCategoryfood(api)

    let box = ''
    for (let i = 0; i < categoryFood2.length; i++) {


        box += `  <div class="col-md-6 col-lg-3 ">
        <div onclick="displayRecipe('${categoryFood2[i].idMeal}')" class="itemFood">

            <img class="w-100 rounded-3" src="${categoryFood2[i].strMealThumb}" alt="">
            <div  class="itemFood-layer ">
                <p class='fs-2'>
                    ${categoryFood2[i].strMeal}
                </p>
            </div>
            </div>


    </div>
`
    }
    categorySectionFood.innerHTML = box

}

////////////////////////////////////////////////////////

async function fetchApiArea() {
    let responseArea = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
    let resultArea = await responseArea.json()
    displayArea(resultArea)
}

fetchApiArea()

function displayArea(resultArea) {

    let temp = ''
    for (let i = 0; i < resultArea.meals.length - 2; i++) {
        temp += `
        <div class="col-md-6 col-lg-3 ">
                    <div onclick="displayarreaa('${resultArea.meals[i].strArea}')" class="countryItem text-white text-center p-5 rounded-2 ">
                        <p class="fs-3">
                            ${resultArea.meals[i].strArea}
                        </p>
                     
                    </div>
                </div>`
    }
    document.getElementById('areaa').innerHTML = temp;


}
///////////////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function fetcharreaa(api) {
    let responsearreaa = await fetch(api)
    let resultarreaa = await responsearreaa.json()
    return resultarreaa.meals

}

async function displayarreaa(resultA) {
    let api = await `https://www.themealdb.com/api/json/v1/1/filter.php?a=${resultA}`

    let arreaaFood2 = await fetcharreaa(api)


    let box = ''
    for (let i = 0; i < arreaaFood2.length; i++) {


        box += `  <div class="col-md-6 col-lg-3 ">
        <div onclick="displayRecipe('${arreaaFood2[i].idMeal}')" class="itemFood">

            <img class="w-100 rounded-3" src="${arreaaFood2[i].strMealThumb}" alt="">
            <div  class="itemFood-layer ">
                <p class='fs-2'>
                    ${arreaaFood2[i].strMeal}
                </p>
            </div>
            </div>


    </div>
`
    }
    areaa.innerHTML = box

}

//////////////////////////////////////////////////////////////////
async function fetchApiIngredients() {
    let responseIngredients = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
    let resultIngredients = await responseIngredients.json()
    displayIngredients(resultIngredients)
}

fetchApiIngredients()

function displayIngredients(resultIngredients) {


    let temp = ''
    for (let i = 0; i < resultIngredients.meals.length - 549; i++) {
        temp += `
        <div class="col-md-6 col-lg-3 ">
                    <div onclick="displayIngre('${resultIngredients.meals[i].strIngredient}')" class="countryItem text-white text-center pt-5 rounded-2 ">
                        <p class="fs-3">
                            ${resultIngredients.meals[i].strIngredient}
                        </p>
                     
                    </div>
                </div>`
    }
    document.getElementById('ingre').innerHTML = temp;

}

////////////////////////////////////////////////////


async function fetchApiIngre(api) {
    let responsIngre = await fetch(api)
    let resultIngre = await responsIngre.json()
    return resultIngre.meals
}


async function displayIngre(ingr) {
    let api = await `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingr}`
    let ingree = await fetchApiIngre(api)


    let box = ''
    for (let i = 0; i < ingree.length; i++) {


        box += `  <div class="col-md-6 col-lg-3 ">
    <div onclick="displayRecipe('${ingree[i].idMeal}')" class="itemFood">

        <img class="w-100 rounded-3" src="${ingree[i].strMealThumb}" alt="">
        <div  class="itemFood-layer ">
            <p class='fs-2'>
                ${ingree[i].strMeal}
            </p>
        </div>
        </div>


</div>
`
    }

    document.getElementById('ingre').innerHTML = box;


}


async function fetchRecipe(api) {
    let responsRecipe = await fetch(api)
    let resultRecipe = await responsRecipe.json()
    return resultRecipe.meals
}


async function displayRecipe(idd) {

    $('#discreption').fadeIn(700)
    $('#Categories').fadeOut(500)
    $('#Search').fadeOut(500)
    $('#Area').fadeOut(500)
    $('#Ingredients').fadeOut(500)
    $('#contact').fadeOut(500)
    $('#meals').fadeOut(500)


    let api = await `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idd}`
    let recipe = await fetchApiIngre(api)
    for (let i = 0; i < 25; i++) {

        document.getElementById('RecipIMg').setAttribute('src', `${recipe[i].strMealThumb}`)
        document.getElementById('RecipeName').innerHTML = recipe[i].strMeal


        let hampozo = `<p class="btn btn-warning cursorrr mt-3">
        ${recipe[i].strTags}
                                        </p>`

        if (recipe[i].strTags == null) {
            document.getElementById('RecipeTAG').innerHTML = 'Tags : ' + 'food'
        } else {
            document.getElementById('RecipeTAG').innerHTML = 'Tags : ' + hampozo

        }


        document.getElementById('RecipeSource').setAttribute('href', `${recipe[i].strSource}`)
        document.getElementById('RecipeYouTube').setAttribute('href', `${recipe[i].strYoutube}`)

        document.getElementById('RecipeInstructions').innerHTML = recipe[i].strInstructions
        document.getElementById('RecipeArea').innerHTML = recipe[i].strArea
        document.getElementById('REcipecategory').innerHTML = recipe[i].strCategory

        let nb1 = document.getElementById('RecipeIngred1')
        nb1.innerHTML = recipe[i].strMeasure1 + recipe[i].strIngredient1

        let nb2 = document.getElementById('RecipeIngred2')
        nb2.innerHTML = recipe[i].strMeasure2 + recipe[i].strIngredient2

        let nb3 = document.getElementById('RecipeIngred3')
        nb3.innerHTML = recipe[i].strMeasure3 + recipe[i].strIngredient3

        let nb4 = document.getElementById('RecipeIngred4')
        nb4.innerHTML = recipe[i].strMeasure4 + recipe[i].strIngredient4

        let nb5 = document.getElementById('RecipeIngred5')
        nb5.innerHTML = recipe[i].strMeasure5 + recipe[i].strIngredient5

        let nb6 = document.getElementById('RecipeIngred6')
        nb6.innerHTML = recipe[i].strMeasure6 + recipe[i].strIngredient6

        let nb7 = document.getElementById('RecipeIngred7')
        nb7.innerHTML = recipe[i].strMeasure7 + recipe[i].strIngredient7

        let nb8 = document.getElementById('RecipeIngred8')
        nb8.innerHTML = recipe[i].strMeasure8 + recipe[i].strIngredient8

        let nb9 = document.getElementById('RecipeIngred9')
        nb9.innerHTML = recipe[i].strMeasure9 + recipe[i].strIngredient9

        let nb10 = document.getElementById('RecipeIngred10')
        nb10.innerHTML = recipe[i].strMeasure10 + recipe[i].strIngredient10

        let nb11 = document.getElementById('RecipeIngred11')
        nb11.innerHTML = recipe[i].strMeasure11 + recipe[i].strIngredient11

        let nb12 = document.getElementById('RecipeIngred12')
        nb12.innerHTML = recipe[i].strMeasure12 + recipe[i].strIngredient12

        let nb13 = document.getElementById('RecipeIngred13')
        nb13.innerHTML = recipe[i].strMeasure13 + recipe[i].strIngredient13

        let nb14 = document.getElementById('RecipeIngred14')
        nb14.innerHTML = recipe[i].strMeasure14 + recipe[i].strIngredient14

        let nb15 = document.getElementById('RecipeIngred15')
        nb15.innerHTML = recipe[i].strMeasure15 + recipe[i].strIngredient15

        let nb16 = document.getElementById('RecipeIngred16')
        nb16.innerHTML = recipe[i].strMeasure16 + recipe[i].strIngredient16

        let nb17 = document.getElementById('RecipeIngred17')
        nb17.innerHTML = recipe[i].strMeasure17 + recipe[i].strIngredient17
        let nb18 = document.getElementById('RecipeIngred18')
        nb18.innerHTML = recipe[i].strMeasure18 + recipe[i].strIngredient18
        let nb19 = document.getElementById('RecipeIngred19')
        nb19.innerHTML = recipe[i].strMeasure19 + recipe[i].strIngredient19


        let nb20 = document.getElementById('RecipeIngred20')
        nb20.innerHTML = recipe[i].strMeasure20 + recipe[i].strIngredient20



        if (recipe[i].strMeasure20 == "") {

            nb20.classList.add('d-none')
        }

        if (recipe[i].strMeasure1 == "") {

            nb1.classList.add('d-none')
        }

        if (recipe[i].strMeasure2 == "") {

            nb2.classList.add('d-none')
        }

        if (recipe[i].strMeasure3 == "") {

            nb3.classList.add('d-none')
        }

        if (recipe[i].strMeasure4 == "") {

            nb4.classList.add('d-none')
        }

        if (recipe[i].strMeasure5 == "") {

            nb5.classList.add('d-none')
        }

        if (recipe[i].strMeasure6 == "") {

            nb6.classList.add('d-none')
        }

        if (recipe[i].strMeasure7 == "") {

            nb7.classList.add('d-none')
        }

        if (recipe[i].strMeasure8 == "") {

            nb8.classList.add('d-none')
        }

        if (recipe[i].strMeasure9 == "") {

            nb9.classList.add('d-none')
        }
        if (recipe[i].strMeasure10 == "") {

            nb10.classList.add('d-none')
        }
        if (recipe[i].strMeasure11 == "") {

            nb11.classList.add('d-none')
        }
        if (recipe[i].strMeasure12 == "") {

            nb12.classList.add('d-none')
        }
        if (recipe[i].strMeasure13 == "") {

            nb13.classList.add('d-none')
        }
        if (recipe[i].strMeasure14 == "") {

            nb14.classList.add('d-none')
        }
        if (recipe[i].strMeasure15 == "") {

            nb15.classList.add('d-none')
        }
        if (recipe[i].strMeasure16 == "") {

            nb16.classList.add('d-none')
        }
        if (recipe[i].strMeasure17 == "") {

            nb17.classList.add('d-none')
        }
        if (recipe[i].strMeasure18 == "") {

            nb18.classList.add('d-none')
        }
        if (recipe[i].strMeasure19 == "") {

            nb19.classList.add('d-none')
        }




    }


}

// ${recipe[i].strMeasure10+recipe[i].strIngredient10}





let inputName = document.getElementById('inputName')
let inputNameAlert = document.getElementById('inputNameAlert')

function validateName() {
    let regex1 = /[a-zA-Z]{3,15}$/gm;
    let t1 = regex1.test(inputName.value);
    if (t1 == true) {
        inputName.classList.add('is-valid')
        inputNameAlert.classList.add('d-none')
        return true
    }
    else {
        inputNameAlert.classList.remove('d-none')
        inputName.classList.remove('is-valid')

    }

}

let inputUrl = document.getElementById('inputUrl')
let inputUrlAlert = document.getElementById('inputUrlAlert')


function validateURL() {
    let regex2 = /[a-zA-Z0-9]{3,20}@[a-zA-Z0-9]{3,10}\.[a-zA-Z0-9]{3,7}/gm;

    let t2 = regex2.test(inputUrl.value);
    if (t2 == true) {
        inputUrlAlert.classList.add('d-none')
        inputUrl.classList.add('is-valid')


        return true
    }
    else {
        inputUrlAlert.classList.remove('d-none')
        inputUrl.classList.remove('is-valid')


    }
}

let inputPhone = document.getElementById('inputPhone')
let inputPhoneAlert = document.getElementById('inputPhoneAlert')

function validatePhone() {
    let regex3 = /^01[0125][0-9]{8}/gm
    let t3 = regex3.test(inputPhone.value);
    if (t3 == true) {
        inputPhone.classList.add('is-valid')
        inputPhoneAlert.classList.add('d-none')
        return true
    }
    else {
        inputPhoneAlert.classList.remove('d-none')
        inputPhone.classList.remove('is-valid')

    }

}

let inputAge = document.getElementById('inputAge')
let inputAgeAlert = document.getElementById('inputAgeAlert')


function validateAge() {
    let regex4 = /^[1-9]{1}[0-9]{1}$/gm
    let t4 = regex4.test(inputAge.value);
    if (t4 == true) {
        inputAge.classList.add('is-valid')
        inputAgeAlert.classList.add('d-none')
        return true
    }
    else {
        inputAgeAlert.classList.remove('d-none')
        inputPhone.classList.remove('is-valid')

    }

}
let inputPassword = document.getElementById('inputPassword')
let inputPasswordAlert = document.getElementById('inputPasswordAlert')


function validatePassword() {
    validateRePassword()
    let regex5 = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/gm
    let t5 = regex5.test(inputPassword.value);
    if (t5 == true) {
        inputPassword.classList.add('is-valid')
        inputPasswordAlert.classList.add('d-none')
        return true
    }
    else {
        inputPasswordAlert.classList.remove('d-none')
        inputPassword.classList.remove('is-valid')

    }

}


let reinputPassword = document.getElementById('reinputPassword')

let reinputPasswordAlert = document.getElementById('reinputPasswordAlert')



function validateRePassword() {

    if (inputPassword.value == reinputPassword.value) {
        reinputPassword.classList.add('is-valid')
        reinputPasswordAlert.classList.add('d-none')
        return true
    }
    else {
        reinputPasswordAlert.classList.remove('d-none')
        reinputPassword.classList.remove('is-valid')

    }

}

// if (validateName() == true && validateURL() == true && validatePhone() == true
//  && validateAge() == true && validatePassword() == true&&validateRePassword()==true) {

//     document.getElementById('btnn').removeAttribute('disabled')
//     reinputPasswordAlert.classList.add('d-none')
//     inputPasswordAlert.classList.add('d-none')
//     inputAgeAlert.classList.add('d-none')
//     inputPhoneAlert.classList.add('d-none')
//     inputNameAlert.classList.add('d-none')
//     inputUrlAlert.classList.add('d-none')

// }