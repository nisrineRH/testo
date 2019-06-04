import { NgModule } from '@angular/core';

import { TestoSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [TestoSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [TestoSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class TestoSharedCommonModule {}
