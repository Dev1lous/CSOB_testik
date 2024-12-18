/**
 * Zde vytvořte formulářové vstupy pomocí react-hook-form, které:
 * 1) Budou součástí formuláře v MainForm, ale zůstanou v odděleném souboru
 * 2) Reference formuláře NEbude získána skrze Prop input (vyvarovat se "Prop drilling")
 * 3) Získá volby (options) pro pole "kategorie" z externího API: https://dummyjson.com/products/categories jako "value" bude "slug", jako "label" bude "name".
 *
 *
 * V tomto souboru budou definovány pole:
 * allocation - number; Bude disabled pokud není amount (z MainForm) vyplněno. Validace na min=0, max=[zadaná hodnota v amount]
 * category - string; Select input s volbami z API (label=name; value=slug)
 * witnesses - FieldArray - dynamické pole kdy lze tlačítkem přidat a odebrat dalšího svědka; Validace minimálně 1 svědek, max 5 svědků
 * witnesses.name - string; Validace required
 * witnesses.email - string; Validace e-mail a asynchronní validace, že email neexistuje na API https://dummyjson.com/users/search?q=[ZADANÝ EMAIL]  - tato validace by měla mít debounce 500ms
 */
import React from 'react';
import { useForm, Controller, useWatch } from 'react-hook-form';

export const NestedFields = () => {
    const { watch } = useForm();
    const amount = watch('amount');
    return (
        <>
            <Controller
            name = "allocation"
            rules={{min: 0, max: amount}}
            render = {({field}) => (
                <input {...field} 
                type="number"
                min = {0}
                max = {amount}
                />
            )}
            />

            <Controller
            name = "category"
            render = {({field}) => (
                <select {...field}>
                    <option value="kitchen-accessories">Kitchen Accessories</option>
                    <option value="bathroom-accessories">Bathroom Accessories</option>
                    <option value="garden">Garden</option>
                    <option value="tools">Tools</option>
                </select>
            )}
            />

            <Controller
            name = "witnesses"
            
            />

            
        
    )
}

            
        

    