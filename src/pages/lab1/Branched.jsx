import {Form, Formik} from "formik";
import {calcBranched, calcLinear} from "./utils";
import {AppFormGroup} from "../../components/AppFormGroup";
import {AppLabel} from "../../components/AppLabel";
import {AppField} from "../../components/AppField";
import {AppButton} from "../../components/AppButton";
import {useState} from "react";

export const Branched = () => {
  const [result, setResult] = useState('...');
  return (
    <div>
      <p className="text-lg">Завдання:</p>
      <img src="/images/lab-1/branching.png" alt="branched"/>

      <Formik
        initialValues={{
          x: '',
          a: '',
          b: '',
        }}
        onSubmit={({ x, a, b }) => {
          if(!b || !a || !x) {
            return alert('Задано не валідні значення')
          }
          setResult(calcBranched(x, a, b));
        }}
      >
        <Form className="border p-2">
          <h2 className="text-center my-2 text-xl">Задайте значення у формі</h2>
          <AppFormGroup>
            <AppLabel htmlFor="x">Значення для x:</AppLabel>
            <AppField id="x" name="x" placeholder="123..." type="number" />
          </AppFormGroup>

          <AppFormGroup className="mt-4">
            <AppLabel htmlFor="a">Значення a:</AppLabel>
            <AppField id="a" name="a" placeholder="123..." type="number" />
          </AppFormGroup>

          <AppFormGroup className="mt-4">
            <AppLabel htmlFor="b">Значення b:</AppLabel>
            <AppField id="b" name="b" placeholder="123..." type="number" />
          </AppFormGroup>

          <AppButton className="mt-2" type="submit">Submit</AppButton>
        </Form>
      </Formik>

      <p className="mt-2 text-lg">Останнє отримане значення <strong>y = {result}.</strong></p>
    </div>
  )
}
