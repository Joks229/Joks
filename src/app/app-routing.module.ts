import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import {GamesComponent} from "./games/games.component";
import {FormsComponent} from "./forms/forms.component";
import {KalkulatorComponent} from "./kalkulator/kalkulator.component";
import {WonderViewComponent} from "./wonder-view/wonder-view.component";
import {BucketGameComponent} from "./zadania/bucket-game/bucket-game.component";
import {MtbShopComponent} from "./mtb-shop/mtb-shop.component";
import {CommentsComponent} from "./comments/comments.component";
import {ModalsComponent} from "./modals/modals.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'kalkulator', component: KalkulatorComponent },
  { path: 'games', component: GamesComponent },
  { path: 'mtb', component: MtbShopComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'bucket', component: BucketGameComponent },
  { path: 'wonder', component: WonderViewComponent },
  { path: 'comments', component: CommentsComponent },
  { path: 'modals', component: ModalsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
