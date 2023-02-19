/* eslint-disable @typescript-eslint/naming-convention */
import { container, DependencyContainer } from "tsyringe";
import { ILogger } from "@spt-aki/models/spt/utils/ILogger";
import { IPostDBLoadMod } from "@spt-aki/models/external/IPostDBLoadMod";
import { DatabaseServer } from "@spt-aki/servers/DatabaseServer";
import { LogTextColor } from "@spt-aki/models/spt/logging/LogTextColor";

class Mod implements IPostDBLoadMod
{
    private modConfig = require("../config/config.json");
    public postDBLoad(container: DependencyContainer): void 
    {
        // get database from server
        const databaseServer = container.resolve<DatabaseServer>("DatabaseServer");
        const dB = databaseServer.getTables();
        const items = dB.templates.items;
        const config = this.modConfig;

        const Cases = config.Cases
        /*const SecureCon = config.SecureCon
        const SecureConID = ["5857a8bc2459772bad15db29",
            "59db794186f77448bc595262",
            "5857a8b324597729ab0a0e7d",
            "544a11ac4bdc2d470e8b456a",
            "5c093ca986f7740a1867ab12"
        ]*/
        const CasesID = ["590c60fc86f77412b13fddcf",
            "62a09d3bcf4a99369e262447",
            "619cbf9e0a7c3a1a2731940a",
            "619cbf7d23893217ec30b689",
            "567143bf4bdc2d1a0f8b4567",
            "5d235bb686f77443f4331278",
            "5e2af55f86f7746d4159f07c",
            "5b7c710788a4506dec015957",
            "5909d4c186f7746ad34e805a",
            "5c0a840b86f7742ffa4f2482",
            "5b6d9ce188a4501afc1b2b25",
            "5aafbde786f774389d0cbc0f",
            "59fb023c86f7746d0d4b423c",
            "59fb042886f7746c5005a7b2",
            "59fafd4b86f7745ca07e1232",
            "5c127c4486f7745625356c13",
            "5c093e3486f77430cb02e593",
            "59fb016586f7746d0d4b423a",
            "5c093db286f7740a1b2617e3",
            "60b0f6c058e0b0481a09ad11",
            "5783c43d2459774bbe137486"
        ]

        const Filts = [
            Cases.DocsCaseFilter,
            Cases.GinkeychainFilter,
            Cases.KeycardHolderFilter,
            Cases.InjectorsCaseFilter,
            Cases.PistolCaseFilter,
            Cases.SiccCaseFilter,
            Cases.GrenadeCaseFilter,
            Cases.LuckyScavFilter,
            Cases.MedcaseFilter,
            Cases.THICCItemsFilter,
            Cases.THICCWeaponsFilter,
            Cases.AmmoCaseFilter,
            Cases.WeaponsCaseFilter,
            Cases.ItemsCaseFilter,
            Cases.KeytoolFilter,
            Cases.MagsCaseFilter,
            Cases.DogtagCaseFilter,
            Cases.MoneyCaseFilter,
            Cases.HolodilnickCaseFilter,
            Cases.WZWalletFilter,
            Cases.SimpleWalletFilter
        ]

        for (const Filters in Filts)
        {
            if (Filts[Filters])
            {
                items[CasesID[Filters]]._props.Grids[0]._props.filters = [];
            }
        }
    }
}
// Logging to console for successful injection
const logger = container.resolve<ILogger>("WinstonLogger");

logger.logWithColor("LOADING: BRAMMERN NO FILTERS 0.1.0",LogTextColor.YELLOW);

module.exports = { mod: new Mod() }