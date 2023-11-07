import { test, expect } from "@playwright/test";

test.beforeAll(async ({ page }) => {
  await page.goto("http://3.1.203.187:3000/login");
});

test("test case login 1 ", async ({ page }) => {
  await page.getByText("Giáo viên").click();
  await page.getByLabel("Email *").click();
  await page.getByLabel("Email *").fill("admin");
  await page.getByLabel("Mật khẩu *").click();
  await page.getByLabel("Mật khẩu *").fill("admin");
  await page.getByRole("button", { name: "Đăng nhập" }).click();

  const title = await page.title();
  expect(title).toBe('http://3.1.203.187:3000/home');
  await page.pause();

});

test.afterEach("Status check", async ({ page }, testInfo) => {
  console.log(`Finished ${testInfo.title} with status ${testInfo.status}`);

  if(testInfo.status !== testInfo.expectedStatus)
  console.log(`did not run, ${page.url()}`)
  
});
