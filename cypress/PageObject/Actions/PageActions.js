/// <reference types= 'cypress'/>

//import { get } from "cypress/types/lodash"
import PageElements from '../Elements/PageElements'


export default class PageActions {
    constructor() {
        globalThis.pom = new PageElements()
    }
    //Login
    navigateToPSC() {
        return cy.visit(pom.URL)
    }
    get_EmailID() {
        return cy.get(pom.EmailID_Login)
    }
    get_Password() {
        return cy.get(pom.Password_Login)
    }
    get_EyeButton() {
        return cy.get(pom.Eye_Button)
    }
    get_LoginButton() {
        return cy.get(pom.Login_Button)
    }
    longWait() {
        return cy.wait(20000)
    }
    medWait() {
        return cy.wait(10000)
    }
    shortWait() {
        return cy.wait(5000)
    }
    //Your Student
    navigateYourStudent() {
        return cy.get(pom.YourStudent_bar)
    }
    addStudentOrStaff() {
        return cy.xpath(pom.AddStudent_Staff)
    }
    //Payment Method
    navigateToPaymentMethod() {
        return cy.xpath(pom.PaymentMethod)
    }
    addPaymentMethod() {
        return cy.xpath(pom.AddPaymentMethod)
    }
    paymentTypeDD() {
        return cy.get(pom.PaymentTypeDD)
    }
    creditOrDebitCard() {
        return cy.xpath(pom.CreditOrDebitCard)
    }
    nickName() {
        return cy.xpath(pom.NickName)
    }
    cardNumber() {
        return cy.xpath(pom.CardNumber)
    }
    mM_YY() {
        return cy.xpath(pom.MM_YY)
    }
    cVV() {
        return cy.xpath(pom.CVV)
    }
    checkbox1() {
        return cy.xpath(pom.Checkbox1)
    }
    checkbox2() {
        return cy.xpath(pom.Checkbox2)
    }
    add_Payment_Method_Button() {
        return cy.xpath(pom.ADD_Payment_Method_Button)
    }
    //ClickOnDashBoard
    clickOnDashBoard() {
        return cy.xpath(pom.ClickOnDashBoard)
    }
    //Account
    accountText() {
        return cy.xpath(pom.AccountText)
    }
    navigationBar() {
        return cy.xpath(pom.NavigationBar)
    }
    //Logout
    logout() {
        return cy.xpath(pom.Logout)
    }
    //Add meal
    addMealIcon() {
        return cy.xpath(pom.AddMealIcon)
    }
    mealAmountTB() {
        return cy.get(pom.MealAmountTB)
    }
    addtoCartButton() {
        return cy.get(pom.AddtoCartButton)
    }
    //CartScreen
    navigationCartScreen() {
        return cy.xpath(pom.NavigationCartScreen)
    }
    paymentMethodCart() {
        return cy.xpath(pom.PaymentMethodCart)
    }
    selectPaymentMethodCart()
    {
        return cy.xpath(pom.SelectPaymentMethodCart)
    }
    
    continueButtonCartScreen()
    {
        return cy.xpath(pom.ContinueButtonCartScreen)
    }
    
    checkboxTotalpopup()
    {
        return cy.xpath(pom.CheckboxTotalpopup)
    }
    makePaymentButton()
    {
        return cy.xpath(pom.MakePaymentButton)
    }
    returnToDashboard()
    {
        return cy.xpath(pom.ReturnToDashboard)
    }
    navigationToMessages()
    {
        return cy.xpath(pom.NavigationToMessages)
    }
    selectMessageCB()
    {
        return cy.xpath(pom.SelectMessageCB)
    }
    deleteIcon()
    {
        return cy.xpath(pom.DeleteIcon)
    }
    yesButton_ConfirmationPopup()
    {
        return cy.xpath(pom.YesButton_ConfirmationPopup)
    }
}


