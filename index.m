file = fopen("output.txt", "w");

Umax_algae = 0.5; 
Ks_algae = 0.1;   
Xmax_algae = 20;  


Umax_yeast = 0.4;  
Ks_glucose = 0.1;  
Y_biomass = 0.5;   
Y_ethanol = 0.45;  


disp("Carbon Capture Simulation - Open Beta by Tamora");
disp("===============================================")
X_algae = input("Initial Algal Biomass Concentration: ");     
X_yeast = input("Initial Yeast Biomass Concentration: ");     
S_glucose = input("Initial Glucose Concentration: ");     
P_ethanol = input("Initial Ethanol Concentration: ");    
P_CO2 = input("Initial CO2 Concentration: ");        
time = 0;         

dt = 0.1;         
t_end = input("Duration: ");  
time_vector = 0:dt:t_end; 

X_algae_array = zeros(size(time_vector));
glucose_array = zeros(size(time_vector)); 
X_yeast_array = zeros(size(time_vector));  
P_ethanol_array = zeros(size(time_vector)); 
P_CO2_array = zeros(size(time_vector));    


biomass_to_glucose_factor = 0.5; 


for i = 1:length(time_vector)
    X_algae_array(i) = X_algae;
    u_algae = Umax_algae * (1); 
    dX_algae = u_algae * X_algae * (1 - (X_algae / Xmax_algae));
    X_algae = X_algae + dX_algae * dt;
    
  
    glucose_produced = biomass_to_glucose_factor * dX_algae; 
    S_glucose = S_glucose + glucose_produced; 
    
   
    if S_glucose > 0
        u_yeast = Umax_yeast * (S_glucose / (Ks_glucose + S_glucose)); 
        
        dX_yeast = u_yeast * X_yeast * dt;
        X_yeast = X_yeast + dX_yeast;
        
        glucose_consumed = dX_yeast / Y_biomass; 
        S_glucose = max(S_glucose - glucose_consumed, 0); 
        ethanol_produced = glucose_consumed * Y_ethanol; 
        P_ethanol = P_ethanol + ethanol_produced; 
        
        
        P_CO2 = P_CO2 + ethanol_produced; 
    end
    
    X_yeast_array(i) = X_yeast;
    P_ethanol_array(i) = P_ethanol;
    P_CO2_array(i) = P_CO2;
end

figure;
subplot(4,1,1);
plot(time_vector, X_algae_array, 'g', 'LineWidth', 2);
title('Algal Biomass Concentration Over Time');
xlabel('Time (h)');
ylabel('Concentration (g/l)');
grid on;

subplot(4,1,2);
plot(time_vector, S_glucose, 'b', 'LineWidth', 2);
title('Glucose Concentration Over Time');
xlabel('Time (h)');
ylabel('Concentration (g/l)');
grid on;

subplot(4,1,3);
plot(time_vector, P_ethanol_array, 'r', 'LineWidth', 2);
title('Ethanol Production Over Time');
xlabel('Time (h)');
ylabel('Ethanol Concentration (g/l)');
grid on;

subplot(4,1,4);
plot(time_vector, P_CO2_array, 'k', 'LineWidth', 2);
title('CO2 Production Over Time');
xlabel('Time (h)');
ylabel('CO2 Concentration (g/l)');
grid on;

disp("Results");
disp("===========================================")
disp(['Final Algal Biomass: ', num2str(X_algae)] );
disp(['Final Glucose Concentration: ', num2str(S_glucose)]);
disp(['Total Ethanol Production: ', num2str(P_ethanol)]);
disp(['Total CO2 Production: ', num2str(P_CO2)]);

fprintf(file, "Results");
fprintf(file, "===========================================");
fprintf(file, ['Final Algal Biomass: ', num2str(X_algae)] );
fprintf(file, ['Final Glucose Concentration: ', num2str(S_glucose)]);
fprintf(file, ['Total Ethanol Production: ', num2str(P_ethanol)]);
fprintf(file, ['Total CO2 Production: ', num2str(P_CO2)]);

fclose(file);