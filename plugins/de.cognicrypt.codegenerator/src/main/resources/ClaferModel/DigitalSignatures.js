scope({c0_Algorithm:2, c0_Enum:9, c0_Performance:4, c0_Security:5, c0_SignatureScheme:2, c0_keysize:2, c0_performance:2, c0_security:2});
defaultScope(1);
intRange(-8, 7);
stringLength(27);

c0_Enum = Abstract("c0_Enum");
c0_Security = Abstract("c0_Security");
c0_NoSecurity = Clafer("c0_NoSecurity").withCard(1, 1);
c0_Broken = Clafer("c0_Broken").withCard(1, 1);
c0_Weak = Clafer("c0_Weak").withCard(1, 1);
c0_Medium = Clafer("c0_Medium").withCard(1, 1);
c0_Strong = Clafer("c0_Strong").withCard(1, 1);
c0_Performance = Abstract("c0_Performance");
c0_VerySlow = Clafer("c0_VerySlow").withCard(1, 1);
c0_Slow = Clafer("c0_Slow").withCard(1, 1);
c0_Fast = Clafer("c0_Fast").withCard(1, 1);
c0_VeryFast = Clafer("c0_VeryFast").withCard(1, 1);
c0_Algorithm = Abstract("c0_Algorithm");
c0_SignatureScheme = Abstract("c0_SignatureScheme");
c0_performance = c0_SignatureScheme.addChild("c0_performance").withCard(1, 1);
c0_security = c0_SignatureScheme.addChild("c0_security").withCard(1, 1);
c0_keysize = c0_SignatureScheme.addChild("c0_keysize").withCard(1, 1);
c0_RSA = Clafer("c0_RSA").withCard(1, 1);
c0_ECDSA = Clafer("c0_ECDSA").withCard(1, 1);
c0_Task = Abstract("c0_Task");
c0_description = c0_Task.addChild("c0_description").withCard(1, 1);
c0_DigitalSignatures = Clafer("c0_DigitalSignatures").withCard(1, 1);
c0_scheme = c0_DigitalSignatures.addChild("c0_scheme").withCard(1, 1);
c0_Security.extending(c0_Enum).refToUnique(Int);
c0_NoSecurity.extending(c0_Security);
Constraint(implies(some(global(c0_NoSecurity)), equal(joinRef(global(c0_NoSecurity)), constant(0))));
c0_Broken.extending(c0_Security);
Constraint(implies(some(global(c0_Broken)), equal(joinRef(global(c0_Broken)), constant(1))));
c0_Weak.extending(c0_Security);
Constraint(implies(some(global(c0_Weak)), equal(joinRef(global(c0_Weak)), constant(2))));
c0_Medium.extending(c0_Security);
Constraint(implies(some(global(c0_Medium)), equal(joinRef(global(c0_Medium)), constant(3))));
c0_Strong.extending(c0_Security);
Constraint(implies(some(global(c0_Strong)), equal(joinRef(global(c0_Strong)), constant(4))));
c0_Performance.extending(c0_Enum).refToUnique(Int);
c0_VerySlow.extending(c0_Performance);
Constraint(implies(some(global(c0_VerySlow)), equal(joinRef(global(c0_VerySlow)), constant(1))));
c0_Slow.extending(c0_Performance);
Constraint(implies(some(global(c0_Slow)), equal(joinRef(global(c0_Slow)), constant(2))));
c0_Fast.extending(c0_Performance);
Constraint(implies(some(global(c0_Fast)), equal(joinRef(global(c0_Fast)), constant(3))));
c0_VeryFast.extending(c0_Performance);
Constraint(implies(some(global(c0_VeryFast)), equal(joinRef(global(c0_VeryFast)), constant(4))));
c0_SignatureScheme.extending(c0_Algorithm);
c0_performance.refToUnique(c0_Performance);
c0_security.refToUnique(c0_Security);
c0_keysize.refToUnique(Int);
c0_RSA.extending(c0_SignatureScheme);
c0_RSA.addConstraint(equal(joinRef(join($this(), c0_performance)), global(c0_Fast)));
c0_RSA.addConstraint(equal(joinRef(join($this(), c0_security)), global(c0_Medium)));
c0_RSA.addConstraint(equal(joinRef(join($this(), c0_keysize)), constant(512)));
c0_ECDSA.extending(c0_SignatureScheme);
c0_ECDSA.addConstraint(equal(joinRef(join($this(), c0_performance)), global(c0_Slow)));
c0_ECDSA.addConstraint(equal(joinRef(join($this(), c0_security)), global(c0_Strong)));
c0_ECDSA.addConstraint(equal(joinRef(join($this(), c0_keysize)), constant(256)));
c0_description.refToUnique(string);
c0_DigitalSignatures.extending(c0_Task);
c0_DigitalSignatures.addConstraint(equal(joinRef(join($this(), c0_description)), constant("\"Digitally sign a document\"")));
c0_scheme.refToUnique(c0_SignatureScheme);
