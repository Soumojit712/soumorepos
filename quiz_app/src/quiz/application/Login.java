
package quiz.application;

import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class Login extends JFrame implements ActionListener{
        JButton rules,back;
        JTextField tfname;
    Login(){
        
        getContentPane().setBackground(Color.WHITE);
        
        ImageIcon i1= new ImageIcon(ClassLoader.getSystemResource("icons/login.jpg"));
        JLabel image = new JLabel(i1);
        image.setBounds(0,0,600,500);
        add(image);
        
        JLabel heading = new JLabel("Simple Minds");
        heading.setBounds(750,60,300,45);
        heading.setFont(new Font("Viner Hand ITC",Font.BOLD,40));
        heading.setForeground(Color.BLUE);
        add(heading);
        
        JLabel name = new JLabel("ENter your name");
        name.setBounds(810,150,300,20);
        name.setFont(new Font("Viner Hand ITC",Font.BOLD,18));
        name.setForeground(Color.BLUE);
        add(name);
        
        tfname = new JTextField();
        tfname.setBounds(735,200,300,25);
        add(tfname);
        
        rules = new JButton("RULES");
        rules.setBounds(735,270,120,25);
        rules.addActionListener(this);
        add(rules);
        
        back = new JButton("BACK");
        back.setBounds(915,270,120,25);
        back.addActionListener(this);
        add(back);
        
        JLabel xd= new JLabel(".");
        add(xd);
 
        setSize(1200,500);
        setLocation(200,150);
        setVisible(true);
    } 
    public void actionPerformed(ActionEvent ae){
        if(ae.getSource() == rules){
            String name = tfname.getText();
            setVisible(false);
            new Rules(name);
        }else if(ae.getSource() == back){
            setVisible(false);
        }
    }
    public static void main(String [] args){
        new Login();
    }
}
