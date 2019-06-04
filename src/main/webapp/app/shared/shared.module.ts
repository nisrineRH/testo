import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestoSharedLibsModule, TestoSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [TestoSharedLibsModule, TestoSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [TestoSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TestoSharedModule {
  static forRoot() {
    return {
      ngModule: TestoSharedModule
    };
  }
}
