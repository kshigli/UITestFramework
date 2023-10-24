Instructions to run **Test1** and **Test2**
- Make sure **yarn** is installed locally
- Open terminal and navigate to the root directory this code
- Run #**yarn** and #**yarn tsc** and make sure it succeeds without any errors

- In the same terminal, run #**yarn test**
- Both Test1 and Test2 should run in the chrome browser

Instructions to run **Test3** and **Test4**
- Important --> please check folder /**dist** for a folder name with name **__ ___test_____** If do find a folder with this name, make sure to delete that folder (along with any child files/folder) to avoid un-necessart API test failures
- Open terminal and navigate to the directory where this code has checked out
- Open **/restUserAPI.test.ts** file and update value for **"name"** json attribute (Line 4) to a unique name
- Run #**yarn test_jest**
- Two tests(create and delete user)should run successfully.
