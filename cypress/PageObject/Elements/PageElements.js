/// <reference types= 'cypress'/>

//import { get } from "cypress/types/lodash"

export default class PageElements
{       //Login
        URL='https://dev.payschoolscentral.com/'
        EmailID_Login='#mat-input-0'
        Password_Login='#mat-input-1'
        Eye_Button='.full-width.ng-tns-c10-2 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-suffix > [mat-icon-button=""] > .ng-star-inserted > .eye-hidden'
        Login_Button='[style="min-height:100vh"] > .ps-card-login > .main > form.ng-dirty > :nth-child(5) > :nth-child(1) > .btn'
        //YourStudent
        YourStudent_bar='#YourStudents'
        AddStudent_Staff='//*[contains(text(),"Add Student / Staff")]'
        //PaymentMethod
        PaymentMethod='(//*[contains(text(),"credit_card")])[last()]'
        AddPaymentMethod='(//*[contains(text(),"Add Payment Method")])[last()]'
        PaymentTypeDD='.mat-select-placeholder'
        CreditOrDebitCard='(//*[contains(text()," Credit/Debit Card ")])[last()]'
        NickName='(//*[@name="NickName"])[last()]'
        CardNumber='(//*[@placeholder="Card Number"])[last()]'
        MM_YY='(//*[@placeholder="MM/YY"])[last()]'
        CVV='(//*[@placeholder="CVV Number"])[last()]'
        Checkbox1='(//*[@class="mat-checkbox-inner-container"])[1]'
        Checkbox2='(//*[@class="mat-checkbox-inner-container"])[2]'
        ADD_Payment_Method_Button='(//*[contains(text(),"ADD PAYMENT METHOD")])[last()]'
        //
        ClickOnDashBoard='(//*[contains(text(),"Dashboard")])[last()]'
        //Account text
        AccountText='(//*[contains(text(),"Account")])[1]'
        NavigationBar='//*[@id="bar-style"]/div/div[1]/button/span/i'
        //Logout
        Logout='(//*[contains(text(),"exit_to_app")])[1]'
        //Add Meal Balance
        AddMealIcon='(//span[@aria-label="add"])[1]'
        MealAmountTB='#rent'
        AddtoCartButton='.px-5 > .btn'
        //CartScreen
        NavigationCartScreen='//mat-icon[@class="mat-icon notranslate mat-badge mat-light material-icons mat-badge-secondary mat-icon-no-color mat-badge-overlap mat-badge-above mat-badge-before mat-badge-medium"]'
        PaymentMethodCart='//div[@class="mat-select-value"]'
        SelectPaymentMethodCart='(//*[text()=" Tinu "])[1]'
        ContinueButtonCartScreen='//button[normalize-space()="CONTINUE"]'
        CheckboxTotalpopup='(//div[@class="mat-checkbox-inner-container mat-checkbox-inner-container-no-side-margin"])[last()]'
        MakePaymentButton='//*[contains(text(),"MAKE PAYMENT")]'
        ReturnToDashboard='(//*[contains(text(),"Return To Dashboard")])[last()]'
        //Message
        NavigationToMessages='//i[@class="material-icons mat-badge mat-badge-secondary mat-badge-above mat-badge-before mat-badge-medium"]'
        SelectMessageCB='(//*[@class="mat-checkbox-inner-container mat-checkbox-inner-container-no-side-margin"])[2]'
        DeleteIcon='(//*[contains(text(),"delete")])[last()]'
        YesButton_ConfirmationPopup='(//*[contains(text(),"YES")])[last()]'
        
}

