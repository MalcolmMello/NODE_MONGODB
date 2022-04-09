import { Request, Response } from 'express';

import { Product } from '../models/Product';
import User from '../models/User';

export const home = async (req: Request, res: Response) => {
    let users = await User.findOne({
        age: { $gt: 18 }
    }).sort({ age: 1 }) /* menor para maior */

    let users1 = await User.findOne({
        age: { $gt: 18 }
    }).sort({ age: -1 }) /* maior para menor*/

    let users2 = await User.findOne({
        age: { $gt: 18 }
    }).sort({ "name.firstaName": 1 }) /* alfabético */




    console.log("USUÁRIOS", users)

    let age: number = 90;
    let showOld: boolean = false;

    if(age > 50) {
        showOld = true;
    }

    let list = Product.getAll();
    let expensiveList = Product.getFromPriceAfter(12);

    res.render('pages/home', {
        name: 'Bonieky',
        lastName: 'Lacerda',
        showOld,
        products: list,
        expensives: expensiveList,
        frasesDoDia: []
    });
};