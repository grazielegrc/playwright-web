import {expect} from '@playwright/test';

export const signupPage = (page) => {

    const open = async () => {
        await page.goto('https://walkdog.vercel.app/signup');
    }

    const submit = async (walker) => {

        await page
            .getByRole('textbox', { name: 'Nome completo' })
            .fill(walker.name);

        await page
            .getByRole('textbox', { name: 'E-mail' })
            .fill(walker.email);

        await page
            .getByRole('textbox', { name: 'CPF somente números' })
            .fill(walker.cpf);

        await page
            .getByRole('textbox', { name: 'CEP' })
            .fill(walker.cep);

        await page
            .getByRole('button', { name: 'Buscar CEP' })
            .click();

        //await page.waitForTimeout(5000);

        await expect(page.getByRole('textbox', { name: 'Rua' })).toHaveValue('Avenida Cabo Branco');

        await page
            .getByPlaceholder('Número', { exact: true })
            .fill(walker.number);

        await page
            .getByRole('textbox', { name: 'Complemento' })
            .fill(walker.complement);

        await page
            .getByRole('listitem')
            .filter({ hasText: walker.category })
            .click();

        await page.setInputFiles('[type=file]', `support/fixtures/${walker.document}`);

        await page
            .getByRole('button', { name: 'Cadastrar' })
            .click();
    }


    return {
        open,
        submit
    
    }

}