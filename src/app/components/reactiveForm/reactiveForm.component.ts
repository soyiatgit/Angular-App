import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'reactive-form',
  templateUrl: './reactiveForm.component.html',
  styleUrls: ['./reactiveForm.component.css']
})
export class ReactiveFormComponent implements OnInit {

    /**
     * this component shows how a basic reactive form is built in Angular.
     * We create a FormGroup object which takes various controls.
     * Each control is mapped to a form field on the screen.
     * We can either hardcode-initialise each control or can use form builder service
     * to do that for us.
     */
  
    private personForm: FormGroup;
    private personFormWatcher: Subscription;
    private nameControlWatcher: Subscription;

    constructor(
        private fb: FormBuilder
    ) {}

    ngOnInit() {
        // initialise the form group here, if needed we can provide default values
        // to the controls while initialising
        this.personForm = new FormGroup({
            name : new FormControl(),
            email: new FormControl,
            age: new FormControl(),
            gender: new FormControl()
        });

        /**the above form group can also be initialized in the below manner
        using form builder. We can directly initiate controls with their
        default values. There are 3 ways of instantiating form in this manner
        **/
       // First way
        /**this.personForm = this.fb.group({
            name : '',
            email: '',
            age: '',
            gender: 'male'
        });*/
        
        // Second way, passing an object. In this case the disabled entries are 
        // automatically removed from the from objects
        /**this.personForm = this.fb.group({
            name : {value: '', disabled: false},
            email: {value: 'abc@def.com', disabled: true},
            age: {value: '', disabled: false},
            gender: {value: '', disabled: false}
        });*/

        // Third way, passing an array whose first element is the value and
        // second element is the list of validation rules
        this.personForm = this.fb.group({
            name : ['', [Validators.required, Validators.maxLength(10)]],
            email: ['', []],
            age: ['', []],
            rating: ['', this.customValidator],
            gender: [true, []]
        });
        this.setFormValues();

        /**
         * We can choose to watch the form-group values or any specific 
         * controls from a form-group and can perform any action on such changes
         * If the form-group is watched the entire form group object is available
         * in subscribe while if a specific control is watched only it is available.
         */
        this.personFormWatcher = this.personForm.valueChanges.subscribe(value => {
            //do some stuff here, like changing validations etc...
            //console.log(value);
        });

        this.nameControlWatcher = this.personForm.get('name').valueChanges.subscribe(value => {
            //do some stuff here, like changing validations etc...
            //console.log(value);
        });
    }

    /**
     * updating the form values programatically can be done using
     * setValue and patchValue method on formGroup. While setValue
     * needs all the values to be set, patchValue can be used to set
     * one or more values at a time
     */
    setFormValues() {
        this.personForm.patchValue({
            name : ''
        });
    }

    /**
     * we can change (add or remove) the validations from any form-control
     * programatically using setValidators() or clearValidators().
     * If a validation is removed programatically, it doesn't change any 
     * implications made by it already. To re-evaluate the form using new
     * validations we have to run updateValueAndValidity().
     */
    public updateValidations() {
        this.personForm.get('name').clearValidators();
        // or this.personForm.controls.name.clearValidators();
        // this.personForm.get('name').setValidators(Validators.minLength(2));
        this.personForm.get('name').updateValueAndValidity();
    }

    /**
     * we can create a custom validations using our own logic and use that 
     * validationFn in the Validation array in form-controls.
     * The validation function takes the control on which it should be applied
     * and returns null if the logic is met or returns an object if the logic is
     * violated. The return object in this case should have key as a name (string)
     * whatever name you want to give to this validation and value as true.
     * This name given by you will be added to the errors object, like we have
     * errors.required by default.
     * 
     * If you want to pass any args to this function, you can try to return this 
     * function as a closure from a wrapper function with the input parameters bind
     * to the closure.
     */
    private customValidator(control: AbstractControl): {[key: string]: boolean} | null {
        if(isNaN(control.value) || control.value > 5 || control.value < 1) {
            return {'rangeValidation' : true};
        }
        return null;
    }

    public save(): void {
        console.log(this.personForm.get('name').errors);
        console.log(this.personForm.value);
    }

    ngOnDestroy() {
        this.personFormWatcher.unsubscribe();
        this.personFormWatcher.unsubscribe();
    }
}
