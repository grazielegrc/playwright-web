import { test, expect } from '@playwright/test';
import { signupPage } from '../../support/pages/signup';


const walker = {
    name : 'Mc Lovin',
    email: 'mclovin@test.com',
    cpf: '00000014141',
    cep: '58045010',
    number: '1000',
    complement: '2º Floor',
    category: 'Cuidar',
    document: 'mclovin.png'
}

test.describe('Testing Walkdog page',  {  tag: '@walkdog' }, () => { 


test('should be able to register a new user', async ({ page }) => {
    
    const signup = signupPage(page);

    await signup.open(page);

    await signup.submit(walker);    

    const message = page.locator('#swal2-html-container');

    await expect(message).toContainText('Recebemos o seu cadastro e em breve retornaremos o contato.');


})

test('not should be able to register a new user without required fields', async ({ page }) => {
    
    const signup = signupPage(page);

    await signup.open(page);

    await page
            .getByRole('button', { name: 'Cadastrar' })
            .click();
    
    await expect(page.locator('.alert-error', { hasText: 'Informe o seu nome completo' })).toBeVisible();

    await expect(page.locator('.alert-error', { hasText: 'Informe o seu melhor email' })).toBeVisible();

    await expect(page.locator('.alert-error', { hasText: 'Informe o seu CPF' })).toBeVisible();

    await expect(page.locator('.alert-error', { hasText: 'Informe o seu CEP' })).toBeVisible();

    await expect(page.locator('.alert-error', { hasText: 'Informe um número maior que zero' })).toBeVisible();

    await expect(page.locator('.alert-error', { hasText: 'Adcione um documento com foto (RG ou CHN)' }), 'Campo documento exibe mensagem de campo obrigatório!!!').toBeVisible();

});
});